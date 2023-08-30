import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { useEffect, useState } from "react";

function TopicPage() {

  const [profile, SetProfile] = useState({});

  useEffect(() => {

    fetch('http://localhost:3000/profile')
      .then(res => res.json())
      .then(data => {
        SetProfile(data);
      });

  }, [])

  const topics = [
    {
      owner: { fullname: "lula da silva" },
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
      comments: 12,
      reposts: 12,
      likes: 31,
      creatAt: "2023-08-01 19:23:00",
    },
    {
      owner: { fullname: "Bolsonaro " },
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
      comments: 17,
      reposts: 4,
      likes: 78,
      creatAt: "2023-08-01 19:23:00",
    },
    {
      owner: { fullname: "Marina silva" },
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius ab excepturi ducimus quas. Minima, consequuntur.",
      comments: 15,
      reposts: 78,
      likes: 22,
      creatAt: "2023-08-01 19:23:00",
    },
    {
      owner: { fullname: "Nando moura" },
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dignissimos officiis adipisci provident aut, vero vel mollitia commodi necessitatibus tempore unde dicta deleniti eius, ab excepturi ducimus quas. Minima, consequuntur.",
      comments: 152,
      reposts: 191,
      likes: 383,
      creatAt: "2023-08-01 19:23:00",
    },
  ];

  return (
    <Box
      id="topic-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <HeaderProfile user={profile} />

      <TopicList items={topics} />
    </Box>
  );
}

export default TopicPage;