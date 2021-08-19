import React from "react";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InputBox() {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg"
          width={40}
          height={40}
          layout="fixed"
        />

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, Rajesh?`}
          />
          <button hidden>Submit</button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="flex mt-4 mr-10 inputIcon items-center">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon flex mt-4 mr-10 items-center">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" hidden />
        </div>

        <div className="inputIcon flex mt-4 mr-10 items-center">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
