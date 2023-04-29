from app.config.weights_biases_config import WDBJobTypes
from app.controllers.language_functions import GenerateRandomWord
from app.controllers.storybook import storybook_templates as st
from app.controllers.storybook.weights_biases_tracking import create_wandb_lean
from langchain.chains import LLMChain, SequentialChain
from langchain.llms import OpenAI


async def StorybookGenerator():
    # initialize model
    openai = OpenAI(model_name="text-davinci-003", verbose=True, max_tokens=2000)

    stage_1_chain = LLMChain(
        llm=openai,
        prompt=st.prompt_template_stage_1,
        output_key="stage_1",
    )

    stage_2_chain = LLMChain(
        llm=openai,
        prompt=st.prompt_template_stage_2,
        output_key="stage_2",
    )

    stage_3_chain = LLMChain(
        llm=openai,
        prompt=st.prompt_template_stage_3,
        output_key="stage_3",
    )

    overall_chain = SequentialChain(
        chains=[stage_1_chain, stage_2_chain, stage_3_chain],
        input_variables=["plot", "ch1", "ch2"],
        output_variables=["stage_1", "stage_2", "stage_3"],
        verbose=True,
    )

    return overall_chain
