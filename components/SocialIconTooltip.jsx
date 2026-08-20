export default function SocialIconTooltip({ toolTip }) {
  return (
    // decorative: the link itself carries an aria-label with the network name
    <div aria-hidden="true" className='absolute top-full mt-2 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex xl:group-focus-within:flex'>
      <div className='bg-white relative flex text-primary items-center p-1.5 rounded-sm'>
        <div className='text-xs leading-none font-semibold flex flex-col gap-1 items-center'>
          {/* map so that each tip is on it own line */}
          {toolTip?.map((tip) => <div key={tip}>{tip}</div>)}
        </div>
        {/* decorative triangle */}
        <div className='border-solid border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2.5 left-1/2 -translate-x-1/2'></div>
      </div>
    </div>
  )
}
