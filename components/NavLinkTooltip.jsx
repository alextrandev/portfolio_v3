export default function NavLinkTooltip({ link }) {
  return (
    // decorative: the link itself carries an aria-label with the same text
    <div aria-hidden="true" className='absolute pr-14 right-0 hidden xl:group-hover:flex xl:group-focus-within:flex'>
      <div className='bg-white relative flex text-primary items-center p-1.5 rounded-sm'>
        <div className='text-xs leading-none font-semibold capitalize'>
          {link.name}
        </div>
        {/* decorative triangle */}
        <div className='border-solid border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2.5'></div>
      </div>
    </div>
  )
}
