# uuid to randomly generate filenames
import os  # used to access filepaths
import uuid
from io import BytesIO

import openai  # OpenAI Python library to make API calls
import requests  # used to download images
import wandb
from app.controllers.language_functions import GenerateRandomWord
from app.controllers.storybook.storybook_templates import prompt_template_stage_4
from PIL import Image  # used to print and edit images

# set API key
openai.api_key = os.environ.get("OPENAI_API_KEY")


async def StorybookMediaGenerator(response):
    return await generate_dalle_payload(reconstructed=response)


# generate dalle formatted prompt based on input
def generate_dalle_prompt(prompt):
    return prompt_template_stage_4.format(prompt=prompt)


# generate dalle response based on prompt_template and prompt
async def generate_dalle_response(prompt) -> str:
    # call the OpenAI API
    generation_response = openai.Image.create(
        prompt=generate_dalle_prompt(prompt),
        n=1,
        size="512x512",
        response_format="url",
    )

    generated_image_url = generation_response["data"][0][
        "url"
    ]  # extract image URL from response

    # # log to wandb
    # generated_image = requests.get(generated_image_url).content
    # img = Image.open(BytesIO(generated_image))
    # logged_image = wandb.Image(img, caption=f"prompt:{prompt}")
    # wandb.log({"prompt": prompt, "dalle-generated": logged_image})
    # img.show()
    return generated_image_url


# generate dalle variations based on prompt_template and prompt
async def generate_dalle_variations(prompt, n=1) -> str:
    # call the OpenAI API
    results = []
    generation_response = openai.Image.create(
        prompt=generate_dalle_prompt(prompt),
        n=n,
        size="512x512",
        response_format="url",
    )

    #

    if n > 1:
        for i in generation_response["data"]:
            results.append(i["url"])  # extract image URL from response:
    else:
        results.append(
            generation_response["data"][0]["url"]
        )  # extract image URL from response:

    # # log to wandb
    # generated_image = requests.get(generated_image_url).content
    # img = Image.open(BytesIO(generated_image))
    # logged_image = wandb.Image(img, caption=f"prompt:{prompt}")
    # wandb.log({"prompt": prompt, "dalle-generated": logged_image})
    # img.show()
    return results


# Add dalle gens to the entire response
async def generate_dalle_payload(reconstructed):
    for idx, i in enumerate(reconstructed["poems"]):
        generated_url_prose = await generate_dalle_variations(
            f"{reconstructed['story'][idx]['title']}, {i['content']}", 2
        )
        # set generated url to poems
        i["url"] = generated_url_prose[0]
        # set generated url to story
        reconstructed["story"][idx]["url"] = generated_url_prose[1]

    ## generating dalle images
    reconstructed["cover"] = await generate_dalle_response(
        f"{reconstructed['foreword']}"
    )
    reconstructed["ch1_avatar"] = await generate_dalle_response(
        f"{reconstructed['character_1']}, {reconstructed['plot']}"
    )
    reconstructed["ch2_avatar"] = await generate_dalle_response(
        f"{reconstructed['character_2']}, {reconstructed['plot']}"
    )

    return reconstructed
