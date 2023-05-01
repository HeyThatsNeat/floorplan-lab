import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return ( 
    <>
      <div className="kitchen">
        <h1>Kitchen</h1>
        <h1><Oven /></h1>
        <h1><Sink /></h1>
      </div>
    </>
  )
}

export default Kitchen;