import { ReactNode, createContext, useState } from "react";
import { ITopic } from "../@types"

type TopicContextProps = {
    topics: ITopic[],
    setTopics: (topics: ITopic[]) => void;
}
export const TopicContext = createContext<TopicContextProps>({} as TopicContextProps);

type TopicContextProviderProps = {
    children: ReactNode
}
export function TopicContextProvider(props: TopicContextProviderProps) {

    const [topics, setTopics] = useState<ITopic[]>([])

    return (
        <TopicContext.Provider value={{topics, setTopics}}>
            {props.children}
        </TopicContext.Provider>
    )

}