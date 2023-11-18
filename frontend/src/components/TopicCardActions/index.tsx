import { ChatBubble, FavoriteBorder, Repeat } from "@mui/icons-material";
import { Button } from "@mui/material";

import './style.css';
import { ITopic } from "../../@types";

type TopicCardActionsProps = {
    topic: ITopic
}
function TopicCardActions({
    topic
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" startIcon={<ChatBubble />}>3</Button>
            <Button variant="text" size="small" startIcon={<Repeat />}>23</Button>
            <Button variant="text" size="small" startIcon={<FavoriteBorder />}>33</Button>
        </div>
    )
}

export default TopicCardActions;