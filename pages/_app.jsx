import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}
