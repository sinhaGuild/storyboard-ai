export interface ConfigAtom {
    title: string
    description: string
}


interface HomePageConfig {
    'plot': ConfigAtom
    'options': ConfigAtom
    'characters': ConfigAtom
}

export const homepageConfig: HomePageConfig = {
    "plot": {
        title: "plotline",
        description: "Think of an interesting plotline to seed your story or use from the presets below."
    },
    "characters": {
        title: "characters",
        description: "What about some customer characters? Look at presets for examples."
    },
    "options": {
        title: "presets & options",
        description: "Hyperparameters, choices and submit."
    }
}