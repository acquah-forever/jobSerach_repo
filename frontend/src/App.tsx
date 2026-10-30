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
    <div className="flex min-h-screen flex-col text-black ">
      <div className="">
        <div className='flex flex-1 flex-col'>
          <Navbar />
          <main className='flex-1'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
