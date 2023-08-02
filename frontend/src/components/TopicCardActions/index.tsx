import { ChatBubble, Repeat, FavoriteBorder } from '@mui/icons-material';
import { Button } from '@mui/material';

import './style.css';

function TopicCardActions(){
  return (

    <div id="topic-card-actions">
      <Button variant="text" size="small" startIcon={<ChatBubble />}>3</Button>
      <Button variant="text" size="small" startIcon={<Repeat />}>23</Button>
      <Button variant="text" size="small" startIcon={<FavoriteBorder />}>33</Button>
    </div>

  )
}

export default TopicCardActions;