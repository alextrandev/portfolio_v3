import Link from "next/link";
import NavLinkTooltip from "./NavLinkTooltip";

export default function NavLink({ link, pathName }) {
  const isActive = link.path === pathName;

  return (
    <Link
      href={link.path}
      aria-label={link.name}
      aria-current={isActive ? 'page' : undefined}
      // so that link icon will change color based on active and hover
      className={
        `${isActive ? 'text-accent' : ''} relative p-3 md:p-5 flex items-center group`
      }
    >
      {/* hover tooltips */}
      <NavLinkTooltip link={link} />

      {/* nav icons */}
      <div aria-hidden="true" className='md:group-hover:scale-150 group-hover:text-accent group-focus-visible:text-accent transition-all duration-250'>
        {link.icon}
      </div>
    </Link>
  )
}
