import React from "react";
import Post from "../post/Post";

function Posts() {
  return (
    <div>
      <Post
        name="Kyle Simpson"
        message="You Don't Know JS Yet!"
        email="js100@gmail.com"
        timestamp="7h"
        image="https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg"
        postImage="https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg"
      />
    </div>
  );
}

export default Posts;
