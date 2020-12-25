import React from "react"
import { InputNewPost } from "components/InputNewPost/InputNewPost"
import { PostsView } from "components/PostsView/PostsView"

const posts = () => {

  return (
    <div>
      <h1>POSTS</h1>
      <InputNewPost />
      <PostsView />
    </div>
  )
}

export default posts
