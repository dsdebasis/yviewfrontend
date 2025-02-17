import channel from '../../assets/channel.png'
import { Link } from "react-router-dom"
const ChannelImg = ({ url }) => {
  return (

    <div className=' self-start px-2'>
      <Link to="/channel">
        <img src={url || channel} alt='channel image' className=' h-12 w-12 rounded-full  xl:h-14 xl:w-14'></img>
      </Link>
    </div>

  )
}

export default ChannelImg
