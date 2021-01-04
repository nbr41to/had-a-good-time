import '../../styles/globals.css'
import '../../styles/reset.css'
import { useRouter } from "next/router"
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { LinkButton } from 'src/components/LinkButton'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {router.pathname !== "/" && <LinkButton path="/" label='トップへ戻る' />}
      <Footer />
    </>
  )
}

export default MyApp
