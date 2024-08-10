import React from 'react'

export default function NavLinkTooltip({ link }) {
  return (
    <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
      <div className='bg-white relative flex text-primary items-center p-1.5 rounded'>
        <div className='text-xs leading-none font-semibold capitalize'>
          {link.name}
        </div>
        {/* decorative triangle */}
        <div className='border-solid border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2.5'></div>
      </div>
    </div>
  )
}
