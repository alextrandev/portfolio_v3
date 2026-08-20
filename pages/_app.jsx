import { MotionConfig } from 'framer-motion';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    // reducedMotion="user" disables Framer animations for prefers-reduced-motion users
    <MotionConfig reducedMotion="user">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}
