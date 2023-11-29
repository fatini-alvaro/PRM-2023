import { ChatBubble, ChatBubbleOutline, Favorite, FavoriteBorder, Repeat } from "@mui/icons-material";
import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";

import './style.css';
import { ILike, IUser } from "../../@types";

type TopicCardActionsProps = {
   commented: boolean,
   totalComments: number,
   clickComment: () => void,

   reposters: IUser[],
   clickRepost: () => void,

   likers: IUser[],
   clickLike: () => void
}
function TopicCardActions({
    commented,
    totalComments,
    clickComment,
    reposters,
    clickRepost,
    likers,
    clickLike
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" 
                startIcon={ commented ? <ChatBubble/> : <ChatBubbleOutline />}
                onClick={clickComment}>
                {totalComments}
            </Button>

            <Tooltip title={
                reposters.length > 0 ? (
                    <Box display="flex" flexDirection="column" gap={1}
                        style={{padding: '0.5rem'}}>

                            {reposters.map((user, index) => (
                                <Box display="flex" flexDirection="row" gap={1} key={index}>
                                    <Avatar alt={user.fullname} sx={{width: 24, height: 24}} />
                                    <Typography variant="body2">
                                        {user.fullname}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>
                ) : (
                    <span>Repostar</span>
                )
            }>
                <Button variant="text" size="small" startIcon={<Repeat />}
                    onClick={clickRepost}>
                    {reposters.length}
                </Button>
            </Tooltip>

            <Tooltip title={
                true ? (
                    <Box display="flex" flexDirection="column" gap={1}
                        style={{padding: '0.5rem'}}>

                            {likers.map((user, index) => (
                                <Box display="flex" flexDirection="row" gap={1} key={index}>
                                    <Avatar alt={user.fullname} sx={{width: 24, height: 24}} />
                                    <Typography variant="body2">
                                        {user.fullname}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>
                ) : (
                    <span>Curtir</span>
                )
            }>

                { likers.length > 0 ? (
                        <Button variant="text" size="small" startIcon={<Favorite />} onClick={clickLike}>
                            {likers.length}
                        </Button> 
                    ) : (
                        <Button variant="text" size="small" startIcon={<FavoriteBorder />} onClick={clickLike}>
                            0
                        </Button>
                    )
                }
            </Tooltip>
        </div>
    )
}

export default TopicCardActions;