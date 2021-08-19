import React from "react";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";

function ChatRoom() {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex p-3">
        <div className="flex mt-2 items-center md:px-9 sm:h-11 md:hover:bg-pink-100 md:hover:bg-opacity-50 rounded-2xl border-2 border-blue-800 border-opacity-50">
          <VideoCameraIcon className="h-7 w-12 text-pink-500" />

          <p className="text-xs sm:text-sm xl:text-base text-blue-600">
            Create Room
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
