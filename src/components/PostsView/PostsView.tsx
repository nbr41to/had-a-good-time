import React from "react"

export const PostsView = () => {
  const [posts, setPosts] = React.useState([
    {
      userId: "123",
      name: "nob",
      content: {
        title: "バッテイングセンター",
        comment: "楽しい時間を過ごせました"
      },
      sendAt: "2020/12/25",
    },
    {
      userId: "456",
      name: "hanako",
      content: {
        title: "お花摘み",
        comment: "たくさん集まりました"
      },
      sendAt: "2020/12/24",
    },
  ])
  const [title, setTitle] = React.useState("")
  const [comment, setComment] = React.useState("")
  return (
    <div className="box">
      {posts.sort((a, b) => {
        if (a.sendAt < b.sendAt) return 1
        if (a.sendAt > b.sendAt) return -1
        return 0
      }).map((post, index) => {
        const content = post.content
        return (
          <div className="box" key={index}>
            <h2>{content.title}</h2>
            <p>{post.name}: {content.comment}</p>
            <p>{post.sendAt}</p>
          </div>
        )
      }
      )}
    </div>
  )
}
