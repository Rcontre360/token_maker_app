import 'tailwindcss/tailwind.css'
import Layout from '../shared/layout'
import '../shared/styles/index.css'

function MyApp({Component, pageProps}) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
