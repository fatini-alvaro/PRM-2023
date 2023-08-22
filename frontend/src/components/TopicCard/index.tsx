import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardActions from "../TopicCardActions";

type TopicCardProps = {
  topic: any;
};

function TopicCard({ topic }: TopicCardProps) {
  return (
    <div id="topic-card">
      <TopicCardHeader />
      <TopicCardBody />
      <TopicCardActions />
    </div>
  );
}

export default TopicCard;