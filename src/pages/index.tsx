import Link from "next/link"

const top = () => {
  return (
    <div>
      <h1>Had a good time!!</h1>
      <p>あなたの大切な時間をシェアしましょう☀️</p>
      <Link href="/posts"><a>投稿ページへ</a></Link>
    </div>
  )
}

export default top
