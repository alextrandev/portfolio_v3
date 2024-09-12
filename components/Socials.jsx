// social link icons
import Link from 'next/link';
import { RiInstagramLine, RiGithubFill, RiLinkedinBoxLine, RiDiscordLine } from 'react-icons/ri';
import { LiaSteam, LiaFlickr } from "react-icons/lia";
import { TbBrandDrupal } from "react-icons/tb";

// social icons bar
export default function Socials() {
  return (
    <div className="flex text-xl items-center max-sm:text-2xl">
      <Social url={'https://github.com/alextrandev'} Icon={RiGithubFill} />
      <Social url={'https://www.linkedin.com/in/tduclong'} Icon={RiLinkedinBoxLine} />
      <Social url={'https://www.drupal.org/u/alextran'} Icon={TbBrandDrupal} />
      <Social url={'https://www.instagram.com/dk10119/'} Icon={RiInstagramLine} />
      <Social url={'https://www.flickr.com/photos/longdk/'} Icon={LiaFlickr} attr="text-2xl max-sm:text-3xl" />
      <Social url={'http://discord.com/users/222010520813699072'} Icon={RiDiscordLine} />
      <Social url={'https://steamcommunity.com/id/kaxc/'} Icon={LiaSteam} />
    </div>
  )
}

// single social icon link to reuse above
export function Social({ url, Icon, attr }) {
  return (
    <Link href={url} target='blank' className={`hover:text-accent transition-all duration-300 p-2 ${attr && attr}`}>
      <Icon />
    </Link>
  )
}
