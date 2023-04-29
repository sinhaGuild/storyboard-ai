import json
import os  # used to access filepaths

import pandas as pd
import wandb
from app.config.weights_biases_config import WDBJobTypes
from app.controllers.language_functions import GenerateRandomWord
from app.controllers.storybook.storybook_dalle_chain import StorybookMediaGenerator
from app.controllers.storybook.storybook_language_chain import StorybookGenerator
from app.controllers.storybook.storybook_utilities import decompose_chapters
from app.controllers.storybook.weights_biases_tracking import create_wandb_lean
from app.models.storybook_model import StoryBookRequestModel, StoryBookResponseModel


async def StorybookSequentialChain(
    storyBookRequest: StoryBookRequestModel,
) -> StoryBookResponseModel:
    # initialize wandb
    # run = await create_wandb_lean(
    #     WDBJobTypes.inf,
    #     project=f"Storyboard-{GenerateRandomWord()}",
    #     tags=["openai", "dalle", "gpt35turbo"],
    # )

    # create a generator instance
    overall_chain = await StorybookGenerator()
    body = overall_chain(
        {
            "plot": storyBookRequest.plot,
            "ch1": storyBookRequest.ch1,
            "ch2": storyBookRequest.ch2,
        }
    )

    response = decompose_chapters(response=body)
    # print(response)
    reconstructed = await StorybookMediaGenerator(response=response)
    return reconstructed

    # Augment dalle responses

    # log to weights and biases
    # prediction_table.add_data(storyBookRequest.plot, reconstructed)
    # wandb.log({"generations": storyBookRequest.plot, "data": reconstructed})
    # wandb.Table(data=[f"{storyBookRequest.plot}", f"{storyBookRequest.ch1}"])
    # log = []
    # log.append({"reconstructed": reconstructed })

    # try:
    #     data = wandb.Table(dataframe=pd.DataFrame(reconstructed))
    #     wandb.log({"reconstructed": data})
    #     wandb.log({"reconstructed_raw": reconstructed})
    # except:
    #     print("Something went wrong with Weights & Biases logging\n")
    # finally:
    #     return reconstructed

    # wandb.finish(quiet=True)

    # return story
