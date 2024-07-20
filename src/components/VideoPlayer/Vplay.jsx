import React from 'react'

const Vplay = () => {
  let link = localStorage.getItem("link")
   
  const {videoid} = useParams()
  console.log("id",)
  // useEffect(()=>{
  //     axios.get("")
  // },[])
  return (
    <div className=' h-screen w- border-black w-full  flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 '>

      <video controls className=' rounded-xl' >
        <source src={link} type='video/mp4' className=''></source>
       
      </video>
      <div>
           
      </div>
    </div>
  )
}

export default Vplay
