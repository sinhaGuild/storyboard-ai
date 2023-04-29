import { Book, LoadingPage } from '@/components/book'
import { CommandCombobox } from '@/components/combo-box'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { selectCh1, selectCh2, selectInput, selectPlot, updateCh1, updateCh2, updatePlot } from '@/features/input/inputSlice'
import { StoryboardStateInferface, initialize } from '@/features/storyboard/storyboardSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { SectionLayout } from '@/sections/home-page'
import { preset_character1, preset_character2, preset_plot } from '@/types/presets'
import { homepageConfig as cfg } from '@/types/site'
import { useState } from 'react'


export type ComboBoxType = 'plot' | 'ch1' | 'ch2'


function App() {

  const dispatch = useAppDispatch()
  const input = useAppSelector(selectInput)
  const plot = useAppSelector(selectPlot)
  const ch1 = useAppSelector(selectCh1)
  const ch2 = useAppSelector(selectCh2)
  const [loading, setLoading] = useState(false)




  const handleClick = async () => {
    setLoading(true)
    if (input) {
      console.log(JSON.stringify(input))
      try {
        const response = await fetch('http://127.0.0.1:8000/book/generate', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "plot": plot, "ch1": ch1, "ch2": ch2 })
        })

        const data: StoryboardStateInferface = await response.json()
        if (data) {
          console.log(JSON.stringify(data, null, 2))
          dispatch(initialize(data))
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  return (

    <div className="grid grid-cols-6">
      <div className="fixed w-[300px] grid items-start h-screen col-span-1 bg-white border-r dark:border-r-slate-700 border-r-slate-100 dark:bg-slate-950">
        <div className="[&_#section-label]:text-sm">
          <SectionLayout sectionConfig={cfg.plot}>
            <Textarea placeholder="Enter a compelling plot or select a preset." onChange={(e) => dispatch(updatePlot(e.target.value))} id="message-2" value={plot} className="my-4 bg-slate-50 resize-none h-[33vh] dark:bg-slate-950" />
            <CommandCombobox frameworks={preset_plot} type='plot' />
          </SectionLayout>
          <SectionLayout sectionConfig={cfg.characters}>
            <Textarea placeholder="Enter character#1 bio." onChange={(e) => dispatch(updateCh1(e.target.value))} id="message-2" value={ch1} className="resize-none my-4 h-[10vh] bg-slate-50 dark:bg-slate-950" />
            <CommandCombobox frameworks={preset_character2} type='ch1' />
            <Separator className="my-4" />
            <Textarea placeholder="Enter character#2 bio." onChange={(e) => dispatch(updateCh2(e.target.value))} id="message-2" value={ch2} className="resize-none my-4 h-[10vh] bg-slate-50 dark:bg-slate-950" />
            <CommandCombobox frameworks={preset_character1} type='ch2' />
            <Button className="h-[4rem] text-4xl my-10 flex" onClick={() => handleClick()}>
              {loading && <Icons.loading className="w-8 h-8 animate-spin" />}
              {!loading && <Icons.submit className="w-8 h-8" />}
              {/* {isLoading && isError && <Icons.error className="w-8 h-8" />} */}
            </Button>
          </SectionLayout>
        </div>
      </div>
      <div className="grid col-start-2 col-span-full">
        <ScrollArea>
          {!loading && <Book />}
          {loading && <LoadingPage />}
        </ScrollArea>
      </div>
    </div>
  )
}

export default App
