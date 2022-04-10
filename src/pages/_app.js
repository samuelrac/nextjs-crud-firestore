import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from "../componentes/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout titulo="Cadastro Simples">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
