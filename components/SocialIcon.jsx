import Link from 'next/link';
import SocialIconTooltip from './SocialIconTooltip';

export default function Social({ url, Icon, attr, toolTip }) {
  return (
    <Link
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${toolTip?.[0] ?? 'Social link'} (opens in new tab)`}
      className={`p-2 max-sm:p-3 group relative ${attr ?? ''}`}
    >
      <Icon aria-hidden="true" className="group-hover:text-accent group-hover:scale-125 group-focus-visible:text-accent transition-all duration-300" />
      {/* hover tooltips */}
      <SocialIconTooltip toolTip={toolTip} />
    </Link>
  )
}
