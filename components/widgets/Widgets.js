import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "../contact/Contact";

function Widgets() {
  const contacts = [
    {
      src: "https://avatars.githubusercontent.com/u/70096180?v=4",
      name: "Rajesh Jha",
    },
    {
      src: "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg",
      name: "YDKJ Yet",
    },
    {
      src: "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg",
      name: "Kyle Simpson",
    },
    {
      src: "https://img.theweek.in/content/dam/week/news/india/images/2021/4/25/narendra-modi-pti250421.jpg",
      name: "You Don't Know",
    },
    {
      src: "https://edunewsnetwork.files.wordpress.com/2021/07/9c130f4a650c7f7c799a898d101c474c.jpg",
      name: "Leaders",
    },
    {
      src: "https://edunewsnetwork.files.wordpress.com/2021/07/9c130f4a650c7f7c799a898d101c474c.jpg",
      name: "APJ Abdul Kalam",
    },
    {
      src: "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg",
      name: "JavaScript",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-lg">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
