import React from 'react'
import firebase from "src/Firebase"

export const InputNewPost = () => {
  const [title, setTitle] = React.useState("")
  const [comment, setComment] = React.useState("")
  const [times, setTimes] = React.useState("")

  const submit = () => {
    if (title !== "" && comment !== "") {
      const d = new Date(); // Today
      const DateTimeFormat = 'YYYY/MM/DD hh:mi:ss'; // "2019/10/04 12:34:56" 
      let time = DateTimeFormat
        .replace(/YYYY/g, String(d.getFullYear()))
        .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
        .replace(/DD/g, ('0' + d.getDate()).slice(-2))
        .replace(/hh/g, ('0' + d.getHours()).slice(-2))
        .replace(/mi/g, ('0' + d.getMinutes()).slice(-2))
        .replace(/ss/g, ('0' + d.getSeconds()).slice(-2))

      firebase.firestore().collection("posts").add({
        userId: "123456",
        name: "user_name",
        content: {
          title,
          comment,
        },
        useTimes: times,
        sendAt: time,
        category: "string",
        tags: [],
      })
      setTitle("")
      setComment("")
    } else {
      alert("タイトルとコメントを入力してください.")
    }
  }
  return (
    <div className="box">
      <div>タイトル</div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>コメント</div>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>過ごした時間</div>
      <input type="text" value={times} onChange={(e) => setTimes(e.target.value)} />
      <button onClick={submit}>送信</button>
    </div>
  )
}
