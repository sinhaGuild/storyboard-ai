from datetime import datetime

import wandb
from app.config.weights_biases_config import WDBJobTypes
from app.controllers.language_functions import GenerateRandomWord
from langchain.callbacks import StdOutCallbackHandler
from langchain.callbacks.base import CallbackManager


def create_wandb_manager(
    job_type: WDBJobTypes, project: str, tags: list[str] = ["llm"]
) -> CallbackManager:
    session_group = datetime.now().strftime("%m.%d.%Y_%H.%M.%S")
    # callback = WandbCallbackHandler(
    #     job_type=job_type,
    #     project=project,
    #     group=f"{job_type}_{session_group}",
    #     tags=tags,
    #     visualize=True,
    #     complexity_metrics=True,
    # )

    # manager = CallbackManager([StdOutCallbackHandler(), callback])

    return []
    # return [manager, callback]


async def create_wandb_lean(
    job_type: WDBJobTypes, project: str, tags: list[str] = ["llm"]
):
    run = wandb.init(
        project=project,
        job_type=job_type,
        group=f"{job_type}_{GenerateRandomWord()}",
        tags=tags,
    )

    # prediction_table = wandb.Table(columns=["prompt", "completion"])

    return run
