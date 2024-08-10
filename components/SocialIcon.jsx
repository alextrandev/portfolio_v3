import Link from 'next/link';
import SocialIconTooltip from './SocialIconTooltip';

export default function Social({ url, Icon, attr, toolTip }) {
  // console.log(toolTip);
  return (
    <Link href={url} target='blank' className={`p-2 group relative ${attr && attr}`}>
      <Icon className="group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
      {/* hover tooltips */}
      <SocialIconTooltip toolTip={toolTip} />
    </Link>
  )
}