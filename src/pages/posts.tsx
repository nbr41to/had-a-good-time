import React from "react"
import { InputNewPost } from "src/components/InputNewPost"
import { PostsView } from "src/components/PostsView"

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
