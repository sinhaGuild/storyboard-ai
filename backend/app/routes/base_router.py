from fastapi import APIRouter, HTTPException
from app.models.base_model import BaseResponseModel
from app.controllers import language_functions as base

router = APIRouter()

@router.get("/healthcheck")
async def health_check() -> BaseResponseModel:
    """
    ## Simple Healthcheck
    ___
    
    Returns token response from openai/cohereai/etc. configurable api parameters.
    """
    response = await base.HealthCheck()
    
    if response is None:
        raise HTTPException(status_code=404, detail=f"No prompt provided as part of input body.")
    
    return {"health_check": response }