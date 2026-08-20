import { useState } from "react";
import InfoBlockNav from "./InfoBlockNav";
import InfoBlockContent from "./InfoBlockContent";

export default function InfoBlock() {
  const [index, setIndex] = useState(0);

  return (
    // xl:min-h matches the tallest tab (skills) so the vertically-centered
    // block—and with it the tab nav—doesn't shift when switching tabs
    <div className='flex flex-col w-full xl:max-w-[48%] min-h-85 xl:min-h-117.5'>
      {/* section navigation bar */}
      <InfoBlockNav index={index} setIndex={setIndex} />
      {/* show the content of the selected section */}
      <InfoBlockContent index={index} />
    </div>
  )
}
