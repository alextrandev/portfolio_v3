// social link icons
import Link from 'next/link';
import { RiInstagramLine, RiGithubFill, RiLinkedinBoxLine, RiDiscordLine } from 'react-icons/ri';
import { LiaSteam, LiaBehanceSquare } from "react-icons/lia";
import { TbBrandDrupal } from "react-icons/tb";

// social icons bar
export default function Socials() {
  return (
    <div className="flex text-xl gap-5 items-center">
      <Social url={'https://github.com/alextrandev'} Icon={RiGithubFill} />
      <Social url={'https://github.com/alextrandev'} Icon={RiLinkedinBoxLine} />
      <Social url={'https://github.com/alextrandev'} Icon={TbBrandDrupal} />
      <Social url={'https://github.com/alextrandev'} Icon={RiInstagramLine} />
      <Social url={'https://github.com/alextrandev'} Icon={LiaBehanceSquare} attr="text-2xl" />
      <Social url={'https://github.com/alextrandev'} Icon={RiDiscordLine} />
      <Social url={'https://github.com/alextrandev'} Icon={LiaSteam} />
    </div>
  )
}

// single social icon link to reuse above
export function Social({ url, Icon, attr }) {
  return (
    <Link href={url} target='blank' className={`hover:text-accent transition-all duration-300 ${attr && attr}`}>
      <Icon />
    </Link>
  )
}
