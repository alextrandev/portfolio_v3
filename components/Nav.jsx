import Link from 'next/link';
import { useRouter } from 'next/router';
// icons import
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiBookOpen,
} from 'react-icons/hi2';
import NavLink from './NavLink';

// nav data and icons
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  // { name: 'skills', path: '/skills', icon: <HiBookOpen /> },
  { name: 'projects', path: '/projects', icon: <HiRectangleGroup /> },
  // {
  //   name: 'resume',
  //   path: '/resume',
  //   icon: <HiViewColumns />,
  // },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

export default function Nav() {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav
      className="
        flex flex-col items-center fixed h-max w-full
        gap-y-4 bottom-0 mt-auto z-50 top-0
        xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen
      "
    >
      {/* nav container */}
      <div
        className="
          flex w-full items-center justify-between h-[80px]
           px-10 py-8 bg-white/10 backdrop-blur-sm text-3xl 
          xl:flex-col xl:justify-center xl:text-xl xl:rounded-full 
          xl:px-0 xl:h-max md:px-40 
        "
      >
        {/* nav items/links mapping */}
        {navData.map((link, index) => (
          <NavLink 
            link={link} 
            index={index} 
            pathName={pathName} 
          />
        ))}
      </div>
    </nav >
  )
}
