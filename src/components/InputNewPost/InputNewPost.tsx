import React from 'react'

export const InputNewPost = () => {
  const [title, setTitle] = React.useState("")
  const [comment, setComment] = React.useState("")
  return (
    <div className="box">
      <div>タイトル</div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <div>コメント</div>
      <input type="text" onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => { }}>送信</button>
    </div>
  )
}
