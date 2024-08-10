// social link icons
import Link from 'next/link';
import { RiInstagramLine, RiGithubFill, RiLinkedinBoxLine, RiDiscordLine } from 'react-icons/ri';
import { LiaSteam, LiaFlickr } from "react-icons/lia";
import { TbBrandDrupal } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";

// social icons bar
export default function Socials() {
  return (
    <div className="flex text-xl items-center max-sm:text-2xl">
      <Social
        url={'https://github.com/alextrandev'}
        Icon={RiGithubFill}
        toolTip={["GitHub", "@alextrandev"]}
      />
      <Social
        url={'https://www.linkedin.com/in/tduclong'}
        Icon={RiLinkedinBoxLine}
        toolTip={["LinkedIn", "@tduclong"]}
      />
      <Social
        url={'https://www.drupal.org/u/alextran'}
        Icon={TbBrandDrupal}
        toolTip={["Drupal.org", "@alextran"]}
      />
      <Social
        url={'https://app.daily.dev/alextran53'}
        Icon={SiDailydotdev}
        toolTip={["Daily.dev", "@alextran53"]}
      />
      <Social
        url={'https://www.instagram.com/dk10119/'}
        Icon={RiInstagramLine}
        toolTip={["Instagram", "@dk10119"]}
      />
      <Social
        url={'https://www.flickr.com/photos/longdk/'}
        Icon={LiaFlickr}
        attr="text-2xl max-sm:text-3xl"
        toolTip={["Flickr", "@longdk"]}
      />
      <Social
        url={'http://discord.com/users/222010520813699072'}
        Icon={RiDiscordLine}
        toolTip={["Discord", "@kaxc"]}
      />
      <Social
        url={'https://steamcommunity.com/id/kaxc/'}
        Icon={LiaSteam}
        toolTip={["Steam", "@kaxc"]}
      />
    </div>
  )
}

// single social icon link to reuse above
export function Social({ url, Icon, attr, toolTip }) {
  // console.log(toolTip);
  return (
    <Link href={url} target='blank' className={`p-2 group relative ${attr && attr}`}>
      <Icon className="group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
      {/* hover tooltips */}
      <div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex'>
        <div className='bg-white opacity-0.5 relative flex text-primary items-center p-1.5 rounded'>
          <div className='text-xs leading-none font-semibold flex flex-col gap-1 items-center'>
            {/* map so that each tip is on it own line */}
            {toolTip?.map((tip, i) => <div key={`${tip}_${i}`}>{tip}</div>)}
          </div>
          {/* decorative triangle */}
          <div className='border-solid border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2.5 left-1/2  -translate-x-1/2'></div>
        </div>
      </div>
    </Link>
  )
}
