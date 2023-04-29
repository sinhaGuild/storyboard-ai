import { StoryboardStateInferface, initialize } from '@/features/storyboard/storyboardSlice'
import { useAppDispatch } from '@/hooks/redux-hooks'
import useSWR from 'swr'


export async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}


export function useLLM(input: any) {
    const dispatch = useAppDispatch()
    const { data, isLoading, error } = useSWR(['http://127.0.0.1:8000/book/generate', input], ([url, input]) => fetcher(url, { body: JSON.stringify({ input }) }))

    if (data) {
        dispatch(initialize(data as StoryboardStateInferface))
    }

    return {
        // story: data as StoryboardStateInferface,
        isLoading,
        isError: error
    }
}