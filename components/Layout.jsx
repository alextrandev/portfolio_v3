import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { usePathname } from "next/navigation";
import Transition from "./Transition";
import { AnimatePresence } from 'framer-motion';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <Transition />
      </div>
    </AnimatePresence>
  );
}
