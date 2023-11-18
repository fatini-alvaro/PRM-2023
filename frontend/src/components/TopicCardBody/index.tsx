import { Typography } from "@mui/material";

type TopicCardBodyProps = {
    content: string
}
function TopicCardBody({
    content
}: TopicCardBodyProps) {
    return (
        <div id="topic-card-body" style={{marginLeft: '3rem'}}>
            <Typography variant="body1">
                {content}
            </Typography>
        </div>
    )
}

export default TopicCardBody;