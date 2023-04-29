from pydantic import BaseModel


class StoryBookRequestModel(BaseModel):
    plot: str
    ch1: str
    ch2: str

    class Config:
        schema_extra = {
            "example": {
                "plot": "an animal that moves to a strange city and learns the meaning of friendship and loyalty",
                "ch1": "Wilbur the magical dog",
                "ch2": "Anthony the cowardly giraffe.",
            }
        }


class StoryBookResponseModel(BaseModel):
    title: str
    plot: str
    character_1: str
    character_2: str
    foreword: str
    story: list[dict]
    poems: list[dict]
    cover: str
    ch1_avatar: str
    ch2_avatar: str

    class Config:
        schema_extra = {
            "example": {
                "title": "Loyalty and Adventure in the Big City: The Journey of Wilbur and Anthony",
                "plot": "an animal that moves to a strange city and learns the meaning of friendship and loyalty",
                "character_1": "Wilbur the magical dog",
                "character_2": "Anthony the cowardly giraffe.",
                "foreword": 'Join Wilbur the magical dog as he embarks on a daring journey to the big city and discovers the true meaning of loyalty along the way. In "Loyalty and Adventure in the Big City: The Journey of Wilbur and Anthony", read about how two unlikely friends conquer the challenges of a new home and find joy in the unknown.',
                "cover": "https://i.imgur.com/tHdtL3w.jpg",
                "ch1_avatar": "https://i.imgur.com/cNqFyGL.jpg",
                "ch2_avatar": "https://i.imgur.com/lznwiMq.png",
                "story": [
                    {
                        "id": "3891a560-2af0-418b-9f3e-fa76a1484aac",
                        "stage": "story",
                        "title": "Chapter 1: Wilbur’s Dilemma",
                        "content": "Wilbur was a magical dog who lived with his family in a small rural town. He loved exploring the woods and chasing squirrels, but he was starting to feel restless. He wanted to experience something new and exciting. One day, Wilbur decided it was time to take a leap of faith and move to the big city. He packed his suitcase and said goodbye to his family and friends. But when he arrived, Wilbur felt overwhelmed and scared. He was in a strange place and didn't know anyone. He was starting to wonder if he had made the right decision.  ",
                        "url": "https://i.imgur.com/cNqFyGL.jpg",
                    },
                    {
                        "id": "e1f2f65b-fce5-4a20-ab98-dfd3709bed9e",
                        "stage": "story",
                        "title": "Chapter 2: Meeting Anthony",
                        "content": "Just as Wilbur was about to give up and return home, he heard a loud honk from the nearby park. He turned to see a tall, gangly giraffe with a friendly face. The giraffe introduced himself as Anthony and said he had just moved to the city too. Wilbur and Anthony quickly became friends. They explored the city together and got to know the local sights and sounds. Wilbur even started to feel more at home. ",
                        "url": "https://i.imgur.com/cNqFyGL.jpg",
                    },
                    {
                        "id": "39ca2160-ed8d-4a97-92dc-776e4bf51558",
                        "stage": "story",
                        "title": "Chapter 3: Learning Loyalty",
                        "content": "One day, Wilbur and Anthony were out",
                        "url": "https://i.imgur.com/cNqFyGL.jpg",
                    },
                ],
                "poems": [
                    {
                        "id": "e33697b8-1462-4f7d-a66b-7c2d3dd8ba11",
                        "stage": "poem",
                        "title": "Chapter 1",
                        "content": " \nWilbur's heart was full of excitement, \nHe wanted a change,a daring flight.\n\n",
                        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-XW8qp83sbFT2dQU54DLc4FPe/user-45KeccCyJdeAOCvSLEgAQ2Ug/img-0IJYli7nNBeSC9FTTBpzbmku.png?st=2023-04-10T15%3A49%3A26Z&se=2023-04-10T17%3A49%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T23%3A34%3A27Z&ske=2023-04-10T23%3A34%3A27Z&sks=b&skv=2021-08-06&sig=euanLEuFJyY8aRQ1zwbTmcxkLNT%2BgEoS3FgUWaOs8UY%3D",
                    },
                    {
                        "id": "76bf5f8e-2071-4ae0-9c94-4e7521121074",
                        "stage": "poem",
                        "title": "Chapter 2",
                        "content": "\nA new friend Anthony he found, \nIn the city, a place so sound.\n\n",
                        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-XW8qp83sbFT2dQU54DLc4FPe/user-45KeccCyJdeAOCvSLEgAQ2Ug/img-3tvay1jCTU8OBHNnzJq3m9Ey.png?st=2023-04-10T15%3A49%3A32Z&se=2023-04-10T17%3A49%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-10T16%3A06%3A02Z&ske=2023-04-11T16%3A06%3A02Z&sks=b&skv=2021-08-06&sig=Ghpsxd71p6E8miK%2BLdCrG601T6638a4zYUAIyQz6ytY%3D",
                    },
                    {
                        "id": "b814e104-48ec-4395-b24f-cdf8deca1036",
                        "stage": "poem",
                        "title": "Chapter 3",
                        "content": "\nTogether they learned loyalty, \nThe bond between them was a true unity.",
                        "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-XW8qp83sbFT2dQU54DLc4FPe/user-45KeccCyJdeAOCvSLEgAQ2Ug/img-Jm1JlWOFQbxMDvyg0CCz4XXS.png?st=2023-04-10T15%3A49%3A37Z&se=2023-04-10T17%3A49%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-10T16%3A22%3A26Z&ske=2023-04-11T16%3A22%3A26Z&sks=b&skv=2021-08-06&sig=gV4JVYx7a6s1ILfvjrqXi9anv6mOnpg2HQrWLd04r6c%3D",
                    },
                ],
            }
        }
