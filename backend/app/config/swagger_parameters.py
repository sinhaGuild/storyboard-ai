ui_parameters = {
    "syntaxHighlight.theme": "arta",
    "displayRequestDuration": True,
    "showCommonExtensions": True,
    "tryItOutEnabled": True,
    "deepLinking": True,
}

contact = {
    "name": "Andhak",
    "url": "http://x-force.example.com/contact/",
    "email": "shunyasea@gmail.com",
}

license_info = {
    "name": "Apache 2.0",
    "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
}

# Top level description page for /docs

description = """
# Python API Boilerplate. 🚀
---

## Purpose
---

1. Reusable python framework for building and deploying API Services.\
2. Standard MVC Pattern.
3. Scalable with Docker compose.

## Packages used
---

- fastapi
- dotenv (environment variables)
- heroku CLI
"""

# Grouped metadata tags

tags_metadata = [
    {
        "name": "🏠 Base",
        "description": "Base operations and health checks.",
        "externalDocs": {
            "description": "fastapi",
            "url": "https://fastapi.tiangolo.com/",
        },
    },
    {
        "name": "📖 Story",
        "description": "Large Language Model Orchestration and Cross-inference for story-form generation.",
        "externalDocs": {
            "description": "Storybook AI",
            "url": "https://langchain.readthedocs.io/en/latest/",
        },
    },
]
