import Nav from '../Navbar/Nav.jsx'
import VideoPage from '../Videos/VideoPage.jsx'
import Search from '../Videos/Search.jsx'

const Home = () => {

  // let authStatus = useSelector((state) => state.auth.status)
  // let authData = useSelector((state) => state.auth.userData)

  // if (authData !== null && authStatus === true) {
  //   navItems=[ "profile","updatepassword","updateprofile","logout"]
  // }

  return (
    <section className='min-h-screen px-2  box-border bg-gradient-to-r from-slate-900 to-slate-700 font-sans pt-2'>

      <Nav />
      <div className=' sticky top-7'>
        <Search />
      </div>

      <VideoPage />
    </section>
  )
}

export default Home
