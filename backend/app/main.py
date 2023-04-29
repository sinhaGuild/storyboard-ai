from datetime import datetime

from app.config import swagger_parameters as swp
from app.routes import base_router, storybook_router
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(override=True)  # load environment variables from .env.

# setup endpoint
app = FastAPI(
    title="Storyboard-server",
    version="2.0.2",
    docs_url="/",
    swagger_ui_parameters=swp.ui_parameters,
    description=swp.description,
    contact=swp.contact,
    license_info=swp.license_info,
    openapi_tags=swp.tags_metadata,
)

# middleware
origins = ["http://localhost:3000", "http://localhost:5173", "http://localhost:8080"]
app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_methods=["*"], allow_headers=["*"]
)

# /base ROUTE
app.include_router(
    base_router.router,
    prefix="/base",
    tags=["🏠 Base"],
    responses={
        404: {"description": "Not found!"},
        418: {"description": "I'm the Base Error!"},
    },
)

# /storybook ROUTE
app.include_router(
    storybook_router.router,
    prefix="/book",
    tags=["📖 Story"],
    responses={
        404: {"description": "Not found!"},
        418: {"description": "I'm the Base Error!"},
    },
)


@app.get("/day", tags=["Dates"])
def get_day_of_week():
    """
    Get the current day of week
    """
    return {"day": datetime.now().strftime("%A"), "status": "excellent!"}
