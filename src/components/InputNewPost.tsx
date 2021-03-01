import React from 'react'
import firebase from "src/Firebase"
import dayjs from "dayjs"
import Select from "react-select"
import CreatableSelect from "react-select/creatable"

const options = [
  { value: 5, label: '5分' },
  { value: 10, label: '10分' },
  { value: 15, label: '15分' },
  { value: 20, label: '20分' },
]

export const InputNewPost: React.FC = () => {
  const [title, setTitle] = React.useState("")
  const [comment, setComment] = React.useState("")
  const [times, setTimes] = React.useState<{ value: number, label: string }>()
  const [tag, setTag] = React.useState("")
  const [tags, setTags] = React.useState<({ label: string; value: string; })[]>([{ label: "Enjoy", value: "enjoy" }, { label: "一人で", value: "only" }])

  const submit = () => {
    // console.log(dayjs(new Date()).format('YYYY/MM/DD hh:mi:ss'))
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
        useTimes: times.value,
        sendAt: time,
        category: "string",
        tags,
      })
      tags.forEach(tag => {
        firebase.firestore().collection("tags").doc("tag").update({
          taglist: firebase.firestore.FieldValue.arrayUnion(tag)
        })
      })
      setTitle("")
      setComment("")
    } else {
      alert("タイトルとコメントを入力してください.")
    }
  }

  const createOption = (label: string): { label: string, value: string } => ({
    label,
    value: label,
  })

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (tag == null) {
      return
    }

    switch (event.key) {
      case "Enter":
      case "Tab":
        if (tag) {
          setTag("")
          setTags([...tags, createOption(tag)])
          event.preventDefault()
        }
    }
  }

  return (
    <div className="box">
      <div>タイトル</div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>コメント</div>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>過ごした時間</div>
      <Select options={options} value={times} onChange={setTimes} />
      <div>タグ</div>
      <CreatableSelect
        inputValue={tag}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={setTags}
        onInputChange={setTag}
        onKeyDown={onKeyDown}
        value={tags}
        placeholder="タグを選択or入力してください！"
      />
      <button onClick={submit}>送信</button>
    </div>
  )
}
