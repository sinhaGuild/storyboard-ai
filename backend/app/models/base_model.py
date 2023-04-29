from pydantic import BaseModel


class BaseResponseModel(BaseModel):
    health_check: str
    # Response: str | None = None

    class Config:
        schema_extra = {
            "example": {
            "health_check": "PASS",
            }
        }