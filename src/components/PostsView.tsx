import React from "react"
import firebase from "src/Firebase"

export const PostsView: React.FC<{ selectedTags: string[] }> = ({ selectedTags }) => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    firebase.firestore().collection("posts").onSnapshot(snapshot => {
      const getPosts = snapshot.docs.map(doc => doc.data())
      setPosts(getPosts)
    })
  }, [])

  return (
    <div className="box">
      {posts?.filter(post => {
        if (selectedTags.length === 0) return true
        const postTags = post.tags?.map((tag) => tag.value)
        console.log(postTags)
        return postTags.filter(tag => selectedTags.includes(tag)).length > 0
      }).sort((a, b) => {
        if (a.sendAt < b.sendAt) return 1
        if (a.sendAt > b.sendAt) return -1
        return 0
      }).map((post, index) => {
        const content = post.content
        return (
          <div className="box" key={index}>
            <h2>{content.title}</h2>
            <p>タグ：
                {post?.tags?.map((tag, index) => <span key={index} className="box">{tag.label}</span>)}
            </p>
            <p>過ごした時間：{post.useTimes}分</p>
            <p>{post.name}: {content.comment}</p>
            <p>{post.sendAt}</p>
          </div>
        )
      }
      )}
    </div>
  )
}
