import { Avatar, Typography } from "@mui/material";

import './style.css';

function TopicCardHeader() {
  return (

    <div id="topic-card-header">
      <Avatar alt="Fulano de tal"/>

      <div className="card-header-text">
        <Typography variant="h6">
          Fulano de Tal
        </Typography>

        <Typography variant="caption">
          Criado há 8 horas
        </Typography>
      </div>

    </div>

  )
}

export default TopicCardHeader;