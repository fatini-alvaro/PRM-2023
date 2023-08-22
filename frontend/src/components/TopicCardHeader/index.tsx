import { Avatar, Typography } from "@mui/material";
import "./style.css";

function TopicCardHeader() {
  return (
    <div id="topic-card-header">
      <Avatar alt="Fulano de Tal"></Avatar>

      <div className="card-header-text">
        <Typography variant="h6">
          <b>Fulano de Tal</b>
        </Typography>
        <Typography variant="caption">Criado há 8 horas</Typography>
      </div>
    </div>
  );
}

export default TopicCardHeader;