import React from "react";
import ChatRoom from "../chatRoom/ChatRoom";
import InputBox from "../inputBox/InputBox";
import Posts from "../posts/Posts";
import Stories from "../stories/Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-4 overflow-y-auto scrollbar-hidden">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/***Stories */}
        <Stories />

        {/***InputBox */}
        <InputBox />

        {/***Chat Room */}
        <ChatRoom />

        {/***Posts */}
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
