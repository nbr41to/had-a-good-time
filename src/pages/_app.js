import '../../styles/globals.css'
import Link from "next/link"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Component {...pageProps} />
      {router.pathname !== "/" && <Link href="/"><a>トップへ戻る</a></Link>}
    </>
  )
}

export default MyApp
