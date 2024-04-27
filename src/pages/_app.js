import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  return (
  <>
    <NextNProgress />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}
