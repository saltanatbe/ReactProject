import PostItem from "../postItem/PostItem";
import React from "react"
import "./PostList.css"

const PostList = ({posts, title}) => {
    
      return (
        <div className="postList">
            <h2 className="title">{title}</h2>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
          ))}
        </div>
      );
}

export default PostList;