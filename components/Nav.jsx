import Link from 'next/link';
import { useRouter } from 'next/router';
// icons import
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data and icons
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

export default function Nav() {
  const router = useRouter();
  const pathname = router.pathname;

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
          gap-y-10 px-4 py-8 bg-white/10 backdrop-blur-sm text-3xl 
          xl:flex-col xl:justify-center xl:text-xl xl:rounded-full 
          xl:px-0 xl:h-max md:px-40 
        "
      >
        {/* nav items/links mapping */}
        {navData.map((link, index) => (
          <Link
            key={`${index}_${link.name}`}
            href={link.path}
            // so that link icon will change color based on active and hover
            className={
              `${link.path === pathname && 'text-accent'} 
                relative flex items-center group
                hover:text-accent transition-all duration-250
              `
            }
          >
            {/* hover tooltips */}
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white/80 relative flex text-primary items-center p-1.5 rounded'>
                <div className='text-xs leading-none font-semibold capitalize'>
                  {link.name}
                </div>
              </div>
            </div>

            {/* nav icons */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav >
  )
}
