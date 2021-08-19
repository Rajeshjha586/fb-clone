import React from "react";
import Storycard from "../storycard/Storycard";

const stories = [
  {
    name: "Rajesh Jha",
    src: "https://avatars.githubusercontent.com/u/70096180?v=4",
    profile: "https://avatars.githubusercontent.com/u/70096180?v=4",
  },
  {
    name: "Kyle Simpson",
    src: "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg",
    profile:
      "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg",
  },
  {
    name: "Narendra Modi",
    src: "https://img.theweek.in/content/dam/week/news/india/images/2021/4/25/narendra-modi-pti250421.jpg",
    profile:
      "https://img.theweek.in/content/dam/week/news/india/images/2021/4/25/narendra-modi-pti250421.jpg",
  },
  {
    name: "A.P.J. Abdul Kalam",
    src: "https://edunewsnetwork.files.wordpress.com/2021/07/9c130f4a650c7f7c799a898d101c474c.jpg",
    profile:
      "https://edunewsnetwork.files.wordpress.com/2021/07/9c130f4a650c7f7c799a898d101c474c.jpg",
  },
  {
    name: "Swami Vivekanand",
    src: "https://www.oneindia.com/img/2018/09/swami-1536642928.jpg",
    profile: "https://www.oneindia.com/img/2018/09/swami-1536642928.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <Storycard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
