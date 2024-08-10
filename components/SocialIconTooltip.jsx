export default function SocialIconTooltip({ toolTip }) {
  return (
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
  )
}
