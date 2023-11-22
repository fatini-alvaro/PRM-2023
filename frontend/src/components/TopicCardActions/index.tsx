import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Repeat } from "@mui/icons-material";
import { Button } from "@mui/material";

import './style.css';
import { ITopic } from "../../@types";

type TopicCardActionsProps = {
   commented: boolean,
   totalComments: number,
   clickComment: () => void,
}
function TopicCardActions({
    commented,
    totalComments,
    clickComment
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" 
                startIcon={ commented ? <ChatBubble/> : <ChatBubbleOutline />}
                onClick={clickComment}>
                {totalComments}
            </Button>

            <Button variant="text" size="small" startIcon={<Repeat />}>
                23
            </Button>

            <Button variant="text" size="small" startIcon={<FavoriteBorder />}>
                33
            </Button>
        </div>
    )
}

export default TopicCardActions;