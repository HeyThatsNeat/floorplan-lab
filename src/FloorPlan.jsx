import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Bedroom from "./Bedroom"

const FloorPlan = (props) => {
  return (
    <>
      <div>
        <Kitchen />
        <LivingRoom />
        <Bedroom bednum={3} />
        <Bedroom bednum={1} />
        <Bedroom bednum={2} />
        <Bath size={'Half'} />
        <Bath size={'Full'} />
      </div>
    </>
  )
}

export default FloorPlan