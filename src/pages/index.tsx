import Link from "next/link"

const top = () => {
  return (
    <div>
      <h1>Top</h1>
      <Link href="/posts"><a>投稿ページへ</a></Link>
    </div>
  )
}

export default top
