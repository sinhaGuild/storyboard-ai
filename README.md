# FastAPI / React / Docker

Foundationally this is a boilerplate project, intended to help bootstrap a fullstack hybrid application with a python-based backend and a typescript-react based front end. To make it worthwhile, we're going to be build an auto-storyboarding AI using large language model chaining techniques. It takes in short-form directional prompt to generate long form content full length stories.

Inference performance will vary depending on the service, but here are some rought benchmarks..

![](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/738dea17-7d12-4a39-b67e-7f0e8f847113.gif?ClientID=vimeo-core-prod&Date=1682749663&Signature=0bee8f6e478a681079753916f83210d058f3c311)
![](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8bb75e74-a2cc-43c4-a6c6-ef94d60a4862.gif?ClientID=vimeo-core-prod&Date=1682750062&Signature=c76ef9b8c44b9badd4e826d69d83e2cc31d628cb)
![](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f095ec18-6aaf-444e-ae63-83982ad596da.gif?ClientID=vimeo-core-prod&Date=1682749973&Signature=4ae580f8b2530fb02c228243591dfc02fc6bacb1)
![](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/53b8fc05-c4c1-4ffb-9aca-aff46057c73d.gif?ClientID=vimeo-core-prod&Date=1682750038&Signature=57100dbe9558f0ace98ee8a1d89109113aabadf1)

1. Azure Openai Private EP (what I'm using) ~ 24 secs
2. Openai (gpt, dalle) API endpoints ~ 92 secs
3. with Stable diffusion (instead of dalle) ~ 232 secs

### Stack

**Backend**

- FastAPI with `pydantic` typed models
  server for routing requests
- [Langchain](https://python.langchain.com/en/latest/)
  LLM library for sequential prompt chaining
- `gpt3.5-turbo` - [Reference](https://platform.openai.com/docs/api-reference/completions)
  Text-Transformer
- `dalle` - [Reference](https://platform.openai.com/docs/api-reference/images/create-variation)
  VIT

**Frontend**

- [Vite-Typescript](https://github.com/vitejs/vite)
  React bootstrapping and typescript support + tailwind css.
- [Radix UI Primitives](https://github.com/radix-ui/primitives)
  Scalable high performance primitives.
- [ReduxJS Toolkit](https://github.com/reduxjs/redux-toolkit)
  Global state management for input and reusable components.

**Deployment**
[optional] Deployed as a set of docker containers on heroku cloud.

- [Docker Compose](https://github.com/docker/compose)
  containerize fastapi (uvicorn container) and react
- [Heroku CLI](https://github.com/heroku/cli)
  allows deployment of containerized apps through git.

## How to use

1. Clone this repo.

```sh
git clone https://github.com/sinhaguild/storyboard-ai
```

2. Create .env file

```sh
#.env
mv backend/.env.example backend/.env
```

3. Set openai API key.

```
OPENAI_API_KEY='your-api-key-here'
```

4. Run (with Docker)

```sh
docker compose up -d
```

5. Cleanup

```sh
docker compose down -V
```

### Running without docker

1. Clone the repo and set environment variables.
2. Run **server**

```sh
cd backend
python3 -m venv .venv
source .venv/bin/activate
uvicorn app.main:app --reload
```

3. Run **client**

```sh
cd frontend
npm run dev
```
