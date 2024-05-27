import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/components/Layout";
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider>
    <NextNProgress />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  </>
  );
}
