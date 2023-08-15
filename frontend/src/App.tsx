import TopicCard from "./components/TopicCard"
import { Divider } from '@mui/material'
import TopicCardSkeleton from "./components/TopicCardSkeleton"
import  HeaderProfile  from "./components/HeaderProfile"

function App() {

  return (
    <div id="App">
      <HeaderProfile/>
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