import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Login from "./pages/LogIn"
import Profile from "./pages/Profile"
import Jobs from "./pages/Jobs"
import Blog from "./pages/Blog"
import Insights from "./pages/Insights"
import Footer from "./components/Footer"

import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col text-white bg-[url('https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg')] bg-cover bg-center bg-no-repeat bg-scroll sm:bg-fixed">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/50" />
      <div className='relative z-10 flex flex-1 flex-col min-h-screen'>
        <Navbar />
        <main className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/jobs" element={<Jobs />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/insights" element={<Insights />}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
