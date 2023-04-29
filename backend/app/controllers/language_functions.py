from wonderwords import RandomSentence, RandomWord

# from dotenv import load_dotenv
# load_dotenv()  # take environment variables from .env.


async def HealthCheck():
    s = RandomSentence()
    response = GenerateRandomWord()
    # response = s.sentence()
    return response


def GenerateRandomWord():
    w = RandomWord()
    return f"{w.word(include_parts_of_speech=['adjectives'])}-{w.word(include_parts_of_speech=['noun'])}"
