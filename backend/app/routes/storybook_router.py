from app.controllers.storybook import storybook_entry_point as sgen
from app.models.storybook_model import StoryBookRequestModel, StoryBookResponseModel
from fastapi import APIRouter, HTTPException

router = APIRouter()


@router.post("/generate")
async def generate_story_book(
    storyBookRequest: StoryBookRequestModel,
) -> StoryBookResponseModel:
    """
    ## Generate a story based on simple prompts.
    ___

    To be implemented (example in chaining llms)
    """
    response = await sgen.StorybookSequentialChain(storyBookRequest)

    if response is None:
        raise HTTPException(
            status_code=404, detail=f"No prompt provided as part of input body."
        )

    return response

    # return {"Storybook": response}
