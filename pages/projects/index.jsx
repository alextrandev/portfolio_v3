import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";

export default function projects() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto"></div>
      <Bulb />
    </div>
  )
}
