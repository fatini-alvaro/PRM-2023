import { Box, Divider } from "@mui/material";
import TopicCardSkeleton from "../TopicCardSkeleton";
import TopicCard from "../TopicCard";

type TopicListProps = {
  items: any;
};

function TopicList({ items }: TopicListProps) {
  return (
    <Box
      id="topic-list"
      display="flex"
      flexDirection="column"
      gap={3}
      style={{ maxWidth: "64rem" }}
    >
      {items.map((item: any, index: number) => (
        <Box display="flex" flexDirection="column" gap={3}
        key={index}>
          <TopicCard topic={item} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
}

export default TopicList;