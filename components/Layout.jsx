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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-70 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline focus:outline-accent"
        >
          Skip to content
        </a>
        <TopLeftImg />
        {/* progressive blur under the header (below xl, where pages scroll
            behind it): full blur at the top fading to transparent at the
            bottom. z-8 keeps it above the scrolling page but below the
            z-9 top-left decoration, so the decoration stays sharp. */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-32 sm:h-28 z-8 xl:hidden bg-linear-to-b from-primary/60 via-primary/30 to-transparent backdrop-blur-md mask-[linear-gradient(to_bottom,black_40%,rgba(0,0,0,0.4)_75%,transparent_100%)]"
        ></div>
        <Nav />
        <Header />
        <main id="main-content" className="h-full">
          {children}
        </main>
        <Transition />
      </div>
    </AnimatePresence>
  );
}
