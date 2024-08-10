import Link from "next/link";
import NavLinkTooltip from "./NavLinkTooltip";


export default function NavLink({ link, index, pathName }) {
  return (
    <Link
      key={`${index}_${link.name}`}
      href={link.path}
      // so that link icon will change color based on active and hover
      className={
        `${link.path === pathName && 'text-accent'} relative md:p-5 flex items-center group`
      }
    >
      {/* hover tooltips */}
      <NavLinkTooltip link={link} />

      {/* nav icons */}
      <div className='md:group-hover:scale-150 group-hover:text-accent transition-all duration-250'>
        {link.icon}
      </div>
    </Link>
  )
}
