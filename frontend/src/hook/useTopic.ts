import { useContext } from "react";
import { TopicContext } from "../contexts/TopicContext";

export function useTopic() {
    const context = useContext(TopicContext);
    return context;
}