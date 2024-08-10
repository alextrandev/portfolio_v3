import { useState } from "react";
import InfoBlockNav from "./InfoBlockNav";
import InfoBlockContent from "./InfoBlockContent";

export default function InfoBlock() {
  const [index, setIndex] = useState(0);

  return (
    <div className='flex flex-col w-full xl:max-w-[48%] h-[340px]'>
      {/* section navigation bar */}
      <InfoBlockNav index={index} setIndex={setIndex} />
      {/* show the content of the selected section */}
      <InfoBlockContent index={index} />
    </div>
  )
}
