import Nav from '../Navbar/Nav.jsx'
import VideoPage from '../Videos/VideoPage.jsx'
import Search from '../Videos/Search.jsx'
import { ToastContainer } from 'react-toastify'
const Home = () => {

  return (
    <section className='min-h-screen px-2  box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans pt-2'>

      <Nav />
      <div className=' sticky top-7'>
        <Search />
      </div>

      <VideoPage />
      <ToastContainer/>
    </section>
  )
}

export default Home
