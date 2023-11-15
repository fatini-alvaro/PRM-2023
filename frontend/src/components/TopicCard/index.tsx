import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardActions from "../TopicCardActions";

type TopicCardProps = {
  topic: any;
};

function TopicCard({ topic }: TopicCardProps) {
  return (
    <div id="topic-card">
      <TopicCardHeader
        createdAt={topic.createdAt}
        owner={topic.owner}
      />
      <TopicCardBody content={topic.content}/>
      <TopicCardActions />
    </div>
  );
}

export default TopicCard;