import uuid

from rich import print


def decompose_chapters(response):
    res = {}

    try:
        res["title"] = response["stage_3"].split('"')[1]
    except IndexError:
        res["title"] = response["stage_3"]
        pass

    res["plot"] = response["plot"]
    res["character_1"] = response["ch1"]
    res["character_2"] = response["ch2"]
    res["foreword"] = response["stage_3"]

    story = response["stage_1"]
    poem = response["stage_2"]

    def chaptered_response(story, splitter):
        formatted_story = story.replace("Chapter", "-=Chapter")
        split_story = formatted_story.split("-=")
        del split_story[0]
        # print(split_story)
        output = []
        for i in split_story:
            temp = i.split(splitter)
            name = temp[0]
            stage = "story" if splitter == "\n\n" else "poem"
            if splitter == ":":
                stage = "poem"
            output.append(
                {
                    "id": str(uuid.uuid4()),
                    "stage": stage,
                    "title": name,
                    "content": " ".join(temp[1:]),
                }
            )

        # print(res)
        return output

    chaptered_story = chaptered_response(story, "\n\n")
    chaptered_poem = chaptered_response(poem, ":")

    res["story"] = chaptered_story
    res["poems"] = chaptered_poem

    print(res)
    return res
