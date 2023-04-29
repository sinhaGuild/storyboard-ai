import { RootState } from '@/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface StoryboardStateInferface {
    title: string
    plot: string
    character_1: string
    character_2: string
    foreword: string
    story: StoryboardStoryInterface[]
    poems: StoryboardPoemInterface[]
    cover: string
    ch1_avatar: string
    ch2_avatar: string
}

export interface StoryboardStoryInterface {
    id: string
    stage: string
    title: string
    content: string
    url: string
}

export interface StoryboardPoemInterface {
    id: string
    stage: string
    title: string
    content: string
    url: string
}

const initialState: StoryboardStateInferface = {
    "title": "Loyalty and Adventure in the Big City: The Journey of Wilbur and Anthony",
    "plot": "an animal that moves to a strange city and learns the meaning of friendship and loyalty",
    "character_1": "Wilbur the magical dog",
    "character_2": "Anthony the cowardly giraffe.",
    "cover": "https://i.imgur.com/tHdtL3w.jpg",
    "ch1_avatar": "https://i.imgur.com/cNqFyGL.jpg",
    "ch2_avatar": "https://i.imgur.com/P1uHI9f.jpg",
    "foreword": 'Join Wilbur the magical dog as he embarks on a daring journey to the big city and discovers the true meaning of loyalty along the way. In "Loyalty and Adventure in the Big City: The Journey of Wilbur and Anthony", read about how two unlikely friends conquer the challenges of a new home and find joy in the unknown.',
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
            "url": "https://i.imgur.com/ASShTJ7.jpg",
        },
        {
            "id": "39ca2160-ed8d-4a97-92dc-776e4bf51558",
            "stage": "story",
            "title": "Chapter 3: Learning Loyalty",
            "content": "One day, Wilbur and Anthony were out. He wanted to experience something new and exciting. One day, Wilbur decided it was time to take a leap of faith and move to the big city. He packed his suitcase and said goodbye to his family and friends. But when he arrived, Wilbur felt overwhelmed and scared. He was in a strange place and didn't know anyone. He was starting to wonder if he had made the right decision.",
            "url": "https://i.imgur.com/P1uHI9f.jpg",
        },
    ],
    "poems": [
        {
            "id": "e33697b8-1462-4f7d-a66b-7c2d3dd8ba11",
            "stage": "poem",
            "title": "Chapter 1",
            "content": " \nWilbur's heart was full of excitement, \nHe wanted a change,a daring flight.\n\n",
            "url": "https://i.imgur.com/cNqFyGL.jpg",
        },
        {
            "id": "76bf5f8e-2071-4ae0-9c94-4e7521121074",
            "stage": "poem",
            "title": "Chapter 2",
            "content": "\nA new friend Anthony he found, \nIn the city, a place so sound.\n\n",
            "url": "https://i.imgur.com/RitSkBe.jpg",
        },
        {
            "id": "b814e104-48ec-4395-b24f-cdf8deca1036",
            "stage": "poem",
            "title": "Chapter 3",
            "content": "\nTogether they learned loyalty, \nThe bond between them was a true unity.",
            "url": "https://i.imgur.com/zVuZckV.jpg",
        },
    ],
}


export const storyboardSlice = createSlice({
    name: 'storyboard',
    initialState,
    reducers: {
        // reducer to iniatialize initialState with a payload of type StoryboardStateInferface
        initialize: (state, action: PayloadAction<StoryboardStateInferface>) => {
            state.title = action.payload.title
            state.plot = action.payload.plot
            state.character_1 = action.payload.character_1
            state.character_2 = action.payload.character_2
            state.foreword = action.payload.foreword
            state.story = action.payload.story
            state.poems = action.payload.poems
            state.ch1_avatar = action.payload.ch1_avatar
            state.ch2_avatar = action.payload.ch2_avatar
            state.cover = action.payload.cover
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setPlot: (state, action: PayloadAction<string>) => {
            state.plot = action.payload
        },
        setCharacter1: (state, action: PayloadAction<string>) => {
            state.character_1 = action.payload
        },
        setCharacter2: (state, action: PayloadAction<string>) => {
            state.character_2 = action.payload
        },
        setForeword: (state, action: PayloadAction<string>) => {
            state.foreword = action.payload
        },
        setStory: (state, action: PayloadAction<StoryboardStoryInterface[]>) => {
            state.story = action.payload
        },
        setPoems: (state, action: PayloadAction<StoryboardPoemInterface[]>) => {
            state.poems = action.payload
        },
    }
})

export const { setTitle, setPlot, setCharacter1, setCharacter2, setForeword, setStory, setPoems, initialize } = storyboardSlice.actions

export const selectTitle = (state: RootState) => state.storyboard.title
export const selectForeword = (state: RootState) => state.storyboard.foreword
export const selectCharacter1 = (state: RootState) => state.storyboard.character_1
export const selectCharacter2 = (state: RootState) => state.storyboard.character_2
export const selectStories = (state: RootState) => state.storyboard.story
export const selectPoems = (state: RootState) => state.storyboard.poems
export const selectPlot = (state: RootState) => state.storyboard.plot
export const selectCover = (state: RootState) => state.storyboard.cover
export const selectCh1Avatar = (state: RootState) => state.storyboard.ch1_avatar
export const selectCh2Avatar = (state: RootState) => state.storyboard.ch2_avatar

export default storyboardSlice.reducer
