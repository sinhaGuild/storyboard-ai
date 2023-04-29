import { ConfigAtom } from "./site"

export interface PresetConfig {
    options: ConfigAtom
    plotline: ConfigAtom
    character1: ConfigAtom
    character2: ConfigAtom
}


export const preset_labels: PresetConfig = {
    plotline:
    {
        title: 'Themes',
        description: 'Some interesting presets to get you started.'
    },
    character1:
    {
        title: 'Character (Lead)',
        description: 'Some interesting presets to get you started.'
    },
    character2:
    {
        title: 'Character (Supporting)',
        description: 'Some interesting presets to get you started.'
    },
    options:
    {
        title: 'Hyperparameters',
        description: 'Tune model hyperparameters for variance, top_p and penalties.'
    }
}

export interface ComboBoxItemInterface {
    value: string
    label: string
}

export const preset_plot: ComboBoxItemInterface[] = [

    { label: "Strange City", value: "Write about an animal that moves to a strange city." },
    { label: "Farm", value: "Write about a child going to a farm for the first time." },
    { label: "Furry Friends", value: "Write about a child learning to read with the help of a few furry friends." },
    { label: "Loyalty", value: "Write about an animal learning the meaning of loyalty." },
    { label: "Differences", value: "Write about a character learning to make a new friend from a different background." },
    { label: "Teamwork", value: "Write about a cast of animals learning how to work as a team to accomplish some goal." },
    { label: "Sharing", value: "Write a story about a character learning to share their favorite toy." },
    { label: "Adversity", value: "Write about a character learning to be brave amid adversity." },
    { label: "Honesty", value: "Write about a kid learning the importance of honesty." },
    { label: "Comedy", value: "Write about a sloth who wants to become a comedian." },
    { label: "Tragedy", value: "Explore the difficulty of losing a pet (or experiencing a drastic life change)." },
    { label: "Kindness", value: "Write about a magical box that operates on kindness." },
    { label: "Environment", value: "Write about a group of animals who must deal with human-made changes to their environment." },
    { label: "Halloween", value: "Explore Halloween through a magical pumpkin and a surly scarecrow." },
    { label: "Sleep", value: "Write about the power of dreams, showing the importance of getting enough sleep." },
    { label: "Shoes", value: "Write about a kid who discovers a magical pair of shoes." },
    { label: "Fast Food", value: "Write about healthy vegetable characters and unhealthy fast-food characters." },
    { label: "Kind Act", value: "Explore the impact a single kind act can have on the world." },
    { label: "Technology", value: "Write about a character learning the power (both positive and negative) of technology." },
    { label: "Transform", value: "Write about a child taking care of a jellybean that turns out to be an egg." },
    { label: "Empath", value: "Explore the power of a misunderstanding — and the importance of empathy." },
    { label: "Photographer", value: "Write a picture book about a character who is an aspiring photographer." },
    { label: "Fish", value: "Write a rhyming story about Freddy the Friendly Fish." },
    { label: "Cleanliness", value: "Write about a couple of characters who make a mess and work together to clean it up." },
    { label: "Swim", value: "Explore a character learning to swim." },
    { label: "Comparisons", value: "Write about a character learning to not compare himself to others." },
    { label: "Anger", value: "Explore the implications of anger with a shark, hippo, or some seemingly angry animal." },
    { label: "Likes and dislikes", value: "Write a story about an animal who is a picky eater." },
    { label: "Wild", value: "Write a story about wild things becoming tame over time." },
    { label: "Age group", value: "Write a story about a young girl making friends outside of her age group." },
    { label: "Prehistoric world", value: "Explore family dynamics through a family of dinosaurs trying to make it in a prehistoric world." },
    { label: "Aspiring Writer", value: "Write a story about an aspiring writer learning to spell (and to use his imagination)." },
    { label: "Bedtime", value: "Write a bedtime story about a pillow who waits all day for her chance to shine at bedtime." },
    { label: "Accidentally famous", value: "Write about a character who becomes unintentionally famous." },
    { label: "Life changing", value: "Write about a character who learns a new skill that changes his life." },
    { label: "Blame", value: "Write about a character accepting the blame for something she didn't do to help a friend." },
    { label: "Happiness isnt", value: "Explore what happiness is — and what it isn't — through the main character's eyes." },
    { label: "Good and bad", value: "Explore how fear can be good, but also how it can be bad." },
    { label: "Time machine", value: "Write about a child who accidentally invents a time machine." },
    { label: "Earth and water", value: "Write a story about the life cycle of water and its importance to all life on Earth." },
    { label: "Que Sera Sera", value: "Write about an event not going to plan, but what happens instead is good in its own way." },
    { label: "Christmas", value: "Explore the meaning of Christmas with the help of a polar bear, a penguin, and an elf." },
    { label: "Potty Trainining", value: "Write about a main character learning to go potty by him or herself." },
    { label: "Conformism", value: "Write about a character who’s fiercely individualistic, meeting one who is a staunch conformist." },
    { label: "Mysterious Toy", value: "Write a mystery about what happened to the main character’s favorite toy." },
    { label: "Wild imagination", value: "Write a story about a child whose imagination goes wild and starts affecting the real world." },
    { label: "Loss", value: "Write about orphans and adoption from the perspective of a young child who has lost her parents." },
    { label: "Thanksgiving", value: "Explore what Thanksgiving is all about with animals getting ready for a harsh winter." },
    { label: "The tallest tree", value: "Write about a child who climbs the tallest tree in the world, making friends along the way." },
    { label: "Detectives", value: "Write about a family of rabbits who are also detectives, helping solve mysteries for the forest creatures." }
]

export const preset_character1: ComboBoxItemInterface[] = [
    { label: "Gajodhar", value: "Gajodhar the magical cat. Uses therapy phrases in everyday conversation" },
    { label: "Mowgli", value: "Mowgli the bear over-thinks simple decisions." },
    { label: "Kanta", value: "Kanta. Under-thinks major decisions. She is a moose." },
    { label: "Kircket", value: "Kircket. Can never find anything. She is a cow." },
    { label: "Boobisha", value: "Boobisha. Has a new business idea every month. She is a peacock." },
    { label: "Radium", value: "Radium. Compulsively agrees with whomever theyre talking to. She is a lion." },
    { label: "Sixer", value: "Sixer. Finishes every story by saying, “And thats about the size of it. She is a chameleon." },
    { label: "Unique", value: "Unique. Plays a laugh track in their daydream like its an old sitcom.She is a cat. " },
    { label: "Babban", value: "Babban. Wears unique glasses.She is a dog." },
    { label: "Indira", value: "Indira. Dresses exclusively in clothes from the 1940s.She is a rabbit. " },
    { label: "Dollar", value: "Dollar. Has uncombable hair.She is a mouse. " },
    { label: "Space", value: "Space. Loves make-up and does it up big every day.She is a bird. " },
    { label: "Kissy ", value: "Kissy. Always wears the same color.She is a fish. " },
    { label: "Ragani", value: "Ragani. Wears the same accessory or item of clothing every day. She is a horse. " },
    { label: "Skylab", value: "Skylab. Always has dirt under their fingernails. She is a snake. " },

]
export const preset_character2: ComboBoxItemInterface[] = [
    { label: "Tikka", value: "Tikka the cowardly mouse.He is a peacock." },
    { label: "Nymphaea", value: "Nymphaea. Sneezes when shes nervous. He is a lion." },
    { label: "Chamkile", value: "Chamkile.Sees the best in everything. He is a chameleon." },
    { label: "Potlu", value: "Potlu.Has a new conspiracy theory every day.He is a cat. " },
    { label: "Sunami", value: "Sunami.Only believes in what can be observed.He is a dog. " },
    { label: "Murugan", value: "Murugan. Works as a dog trainer but dreams of being a horse trainer.He is a rabbit. " },
    { label: "Subhash", value: "Subhash. Dreams of opening a cat café.He is a mouse. " },
    { label: "Pechkas", value: "Pechkas. Studies ballet to become a better football player.He is a bird. " },
    { label: "Chaman", value: "Chaman. Became a runner just for the solitude.He is a fish. " },
    { label: "Macha", value: "Macha. Looking for work as a full-time villain.He is a horse. " },
    { label: "Gubbara", value: "Gubbara. Just moved away from home and doesn’t know who they are without family.He is a snake. " },
    { label: "Dharmu", value: "Dharmu. Relied on their sibling for stability and guidance growing up. She is a rabbit " },
    { label: "Fugga", value: "Fugga. Feels like their most authentic self when they’re with their love interest. He is a parrot." },
    { label: "Ramu", value: "Ramu the heron feels like they have to be helpful to be valued" },
]


