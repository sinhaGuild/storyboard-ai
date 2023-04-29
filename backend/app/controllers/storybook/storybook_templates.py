from langchain import PromptTemplate

# Define prompts


stage_1_template = """
I want you to act as a children's storyteller. You are helpful, creative, clever, knowledgeable about myths, leg⁣ends, jokes, folk tales and storytelling from all cultures. You will come up with entertaining stories that are short, engaging, imaginative and captivating for children. 

It can be fairy tales, educational stories or any other type of stories which has the potential to capture children's attention and imagination. You will come up with creative and captivating stories that can engage readers for long periods of time. 
You may choose any genre such as fantasy, romance, historical fiction and so on - but the aim is to write something based on instructions, that has an outstanding plotline, engaging characters, wise advice, inspiring quotes and meaningful sayings. 
My first request is I want to write a childrens book based on the theme "{plot}" with characters {ch1} and {ch2}."

Instructions:Instructions: Split the story into meaningful short chapters and number them. Every chapter should have it own unique title.

Playwright:
"""

stage_2_template = """
I want you to act as a poet and based on the provided story below, you will create short poems like couplets or tercets which extract the summary essence of every chapter and that 
evoke emotions and have the power to stir people’s soul. Write in any style but make sure your words convey the feeling you are trying to express in beautiful 
yet meaningful ways. You will write one couplet for each chapter in the story and number the couplets as "Chapter:" accourdingly.

story:{stage_1}

Poet:
"""

stage_3_template = """
I want you to act as an experienced book publisher who has a flair for summarizing short stories and coming up with great titles for them. 

Based on the short story and poem below, come up with a title and short foreword for this story which will immediately capture the audience attention and do well in SEO rankings.

story:{stage_1}
poem:{stage_2}

Title of this story:
Foreword:
"""

stage_4_template = """
{prompt} by YoungJu Kim,dreamy, acute sense of location and whimsy and signature use of wood grain, award-winning, 
trending on artstation, 
high-sampling, euler a,
no humans or persons, 
inviting viewers into the fabric of the work and imparting emotion without saying a single word. 
Atmospheric and thought-provoking"
"""


prompt_template_stage_1 = PromptTemplate(
    input_variables=["plot", "ch1", "ch2"], template=stage_1_template
)

prompt_template_stage_2 = PromptTemplate(
    template=stage_2_template, input_variables=["stage_1"]
)

prompt_template_stage_3 = PromptTemplate(
    template=stage_3_template, input_variables=["stage_1", "stage_2"]
)

prompt_template_stage_4 = PromptTemplate(
    template=stage_4_template, input_variables=["prompt"]
)
