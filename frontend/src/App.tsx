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
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-black">
      <div className="flex w-full flex-1 flex-col">
        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar />
          <main className="w-full min-w-0 flex-1 bg-slate-50">
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

