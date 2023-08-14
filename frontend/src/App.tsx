import TopicCard from "./components/TopicCard"
import { Divider } from '@mui/material'
import TopicCardSkeleton from "./components/TopicCardSkeleton"

function App() {

  return (
    <div id="App">
      <TopicCard/>
      <Divider />
      <TopicCard/>
      <Divider />
      <TopicCard/>
      <Divider />
      <TopicCard/>
      <Divider />
      <TopicCardSkeleton />
    </div>
  )
}

export default App