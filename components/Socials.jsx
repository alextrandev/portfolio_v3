// social link icons
import socialsData from '../lib/socialsData';
import SocialIcon from './SocialIcon';

// social icons bar
export default function Socials() {
  return (
    <div className="flex text-xl items-center max-sm:text-2xl">
      {socialsData.map((data) =>
        <SocialIcon
          url={data.url}
          Icon={data.Icon}
          attr={data?.attr}
          toolTip={data.toolTip}
        />
      )}
    </div>
  )
}
