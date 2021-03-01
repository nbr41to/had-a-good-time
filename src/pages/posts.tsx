import React from "react"
import { FilterModal } from 'src/components/FilterModal'
import { InputNewPost } from "src/components/InputNewPost"
import { PostsView } from "src/components/PostsView"

const posts = () => {
  const [selectedTags, setSelectedTag] = React.useState<string[]>([])
  const addTag = (value: string) => {
    if (!selectedTags.includes(value)) {
      setSelectedTag([...selectedTags, value])
    }
  }
  const clearTags = () => setSelectedTag([])
  console.log(selectedTags)
  return (
    <div>
      <h1>POSTS</h1>
      <FilterModal open close={() => { }} onChange={addTag} clear={clearTags} />
      <InputNewPost />
      <PostsView selectedTags={selectedTags} />
    </div>
  )
}

export default posts
