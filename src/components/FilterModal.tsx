import React from 'react'
import firebase from "src/Firebase"

type FilterModalProps = {
  open: boolean
  close: () => void
  onChange: (value: string) => void
  clear: () => void
}

export const FilterModal: React.FC<FilterModalProps> = ({ open, close, onChange, clear }) => {
  const [tags, setTags] = React.useState<{ value: string, label: string }[]>()

  React.useEffect(() => {
    let _tags: { value: string, label: string }[]
    firebase.firestore().collection('tags').doc('tag').get().then(doc => {
      console.log(doc.data())
      _tags = doc.data().taglist
      setTags(_tags)
    })
  }, [])

  return (
    <>
      { open &&
        <div>
          {tags?.map(tag => <button onClick={() => { onChange(tag.value); close(); }}>{tag.label}</button>)}
          <button onClick={clear}>×</button>
        </div>
      }
    </>
  )
}
