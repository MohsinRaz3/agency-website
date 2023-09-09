import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import Chatbot from "@/components/Chatbot"

export default function App({ Component, pageProps }) {


  return (
    <Layout>
      <Component {...pageProps} />
      <Chatbot />
    </Layout>
  )
}
