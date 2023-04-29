import { selectCh1Avatar, selectCh2Avatar, selectCharacter1, selectCharacter2, selectCover, selectForeword, selectPlot, selectPoems, selectStories, selectTitle } from "@/features/storyboard/storyboardSlice";
import { useAppSelector } from "@/hooks/redux-hooks";
import html2canvas from 'html2canvas';
import React, { LegacyRef, useEffect, useState } from 'react';
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export const Book = () => {
    const title = useAppSelector(selectTitle)
    const foreword = useAppSelector(selectForeword)
    const character1 = useAppSelector(selectCharacter1)
    const character2 = useAppSelector(selectCharacter2)
    const stories = useAppSelector(selectStories)
    const poems = useAppSelector(selectPoems)
    const plot = useAppSelector(selectPlot)
    const cover = useAppSelector(selectCover)
    const ch1_avatar = useAppSelector(selectCh1Avatar)
    const ch2_avatar = useAppSelector(selectCh2Avatar)

    const exportRef = React.createRef()


    const handleDownloadImage = async () => {
        const element = exportRef.current;
        const canvas = await html2canvas(element as HTMLElement, {
            ignoreElements: (node) => {
                return node.nodeName === 'IFRAME';
            },
            allowTaint: true,
            useCORS: true,
        });

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'complete_story.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    return (
        <div className="flex flex-col gap-4 my-7" ref={exportRef as LegacyRef<HTMLDivElement>}>
            <Button type="button" variant={'outline'} onClick={handleDownloadImage} className="fixed rounded-full w-14 h-14 bottom-12 right-12">
                <Icons.download />
            </Button>
            <TitlePage title={title} foreword={foreword} plot={plot} bg={cover} />
            <CharacterPage character_1={character1} character_2={character2} ch1_avatar={ch1_avatar} ch2_avatar={ch2_avatar} />
            {stories.map((story, index) => (
                <div key={story.id}>
                    <ChapterTitlePage title={story.title} key={story.id} bg={story.url} />
                    <br />
                    <PoemPage poem={poems[index].content} key={poems[index].id} bg={poems[index].url} />
                    <br />
                    <ChapterContentPage content={story.content} key={story.title} bg={poems[index].url} />
                </div>
            ))}
            <PoemPage poem={'fin.'} />
        </div>
    );

}

export function TitlePage({ title, foreword, bg = 'https://i.imgur.com/tHdtL3w.jpg', plot }: { title: string, foreword: string, bg?: string, plot: string }) {

    return (
        <div className="container grid grid-cols-3">
            <div className="col-span-1 grid h-[72rem] grid-rows-1 bg-slate-950 px-12 py-11 text-slate-300 dark:bg-white dark:text-slate-800">
                <p className="font-black tracking-widest text-white uppercase dark:text-slate-950">Foreword</p>
                <p className="text-justify">{foreword}</p>
                <Separator className="my-5" />
                <p className="text-sm italic text-justify text-slate-500">input plot was: "{plot}"</p>
            </div>
            <div className="grid w-full col-span-2 bg-white dark:bg-slate-950">
                <div className="grid h-[72rem] grid-cols-1 grid-rows-2 gap-4">
                    <div className="grid w-full">
                        <img src={bg} alt="" className="object-cover object-center w-full h-1/3" />
                    </div>
                    <div className="grid w-full px-8 font-zap text-4xl leading-[2.8]">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}


export function ChapterTitlePage({ title, bg = 'https://i.imgur.com/tHdtL3w.jpg' }: { title: string, bg?: string }) {
    return (
        <div className="container h-[72rem] flex flex-col">
            <img src={bg} alt="" className="object-cover object-center w-full h-3/4" />
            <div className="w-full px-8 font-zap text-4xl leading-[2.8] text-center pt-[5rem] bg-white dark:bg-slate-950 h-full">
                {title}
            </div>
        </div>

    );
}
export function ChapterContentPage({ content, bg = 'https://i.imgur.com/tHdtL3w.jpg' }: { content: string, bg?: string }) {
    return (
        <div className="container h-[72rem] flex">
            <img src={bg} alt="" className="object-cover object-center w-1/2 h-full " />
            <p className="w-full px-10 py-16 text-justify bg-white dark:bg-slate-950">{content} </p>
        </div>

    );
}
export function PoemPage({ poem, bg = 'https://i.imgur.com/tHdtL3w.jpg' }: { poem: string, bg?: string }) {
    return (

        <div className="container h-[72rem] flex flex-col w-[110rem] bg-white dark:bg-slate-950 items-center pt-[24rem]">
            <img src={bg} alt="" className="object-cover object-center rounded-full shadow-md w-28 aspect-square" />
            <div className="w-full px-8 font-zap text-4xl leading-[4] text-center pt-[3rem] tracking-wide">
                {poem}
            </div>
        </div>
    );
}

export function CharacterPage({ character_1, character_2, ch1_avatar, ch2_avatar }: { character_1: string, character_2: string, ch1_avatar?: string, ch2_avatar?: string }) {
    // extract first word from character as name.
    const ch1_name = character_1.replace(/ .*/, '');
    const ch2_name = character_2.replace(/ .*/, '');

    return (
        <div className="container flex h-[72rem] items-center gap-2 bg-white dark:bg-slate-950 w-[110rem]">
            <div className="w-full px-8 font-zap text-6xl leading-[2.8] underline underline-offset-[2rem]">Characters</div>
            <CharacterSingle character_name={ch1_name} character_bio={character_1} key={ch1_name} bg={ch1_avatar} />
            <CharacterSingle character_name={ch2_name} character_bio={character_2} key={ch2_name} bg={ch2_avatar} />
        </div>
    );
}


// Single Character 
export function CharacterSingle({ bg = 'https://i.imgur.com/RitSkBe.jpg', character_name, character_bio }: { bg?: string, character_name: string, character_bio: string }) {
    return (
        <div className="flex flex-col items-center w-full px-4">
            <img src={bg} alt="" className="object-cover object-center w-1/2 h-1/3" />
            <div className="w-full px-8 pt-[3rem] text-center font-zap text-4xl leading-[2.8]">{character_name}</div>
            <p className="px-10 py-16 text-justify">{character_bio}</p>
        </div>
    );
}

export function LoadingPage() {
    return (
        <div className="container h-[72rem] flex flex-col bg-white dark:bg-slate-950">
            <Skeleton className="w-full h-[32rem] mb-20 mt-5" />
            <Delayed waitBeforeShow={3000}><LoadingPrimitive message="Generating Outline" /></Delayed>
            <Delayed waitBeforeShow={15000}><LoadingPrimitive message="Generating Story" /></Delayed>
            <Delayed waitBeforeShow={30000}><LoadingPrimitive message="Generating Media" /></Delayed>
            <Delayed waitBeforeShow={72000}><LoadingPrimitive message="Rendering" /></Delayed>
        </div>
    );
}


const Delayed = ({ children, waitBeforeShow = 500 }: { children: React.ReactElement, waitBeforeShow?: number }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        console.log(waitBeforeShow);
        setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
    }, [waitBeforeShow]);

    return isShown ? children : null;
};

const LoadingPrimitive = ({ message }: { message: string }) => {
    return (
        <div className="flex items-center space-x-4 my-7">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="space-y-2 text-slate-500">
                {message}
            </div>
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    );
}