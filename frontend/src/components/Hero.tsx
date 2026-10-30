import { motion } from 'motion/react'
import { NavLink } from 'react-router-dom'


const Hero = () => {
    const parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    const children = {
        hidden: { opacity: 0, y: -71 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <motion.div variants={parent} initial="hidden" animate="visible" className=" flex flex-col min-h-screen justify-center items-center text-center px-4 pb-16 sm:px-15 sm:pb-24">
            <motion.h1 variants={children} className="mt-4 mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">Finding Your Dream <br />
                <span className="text-rotate text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    <span className="justify-items-center">
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>Software Engineering</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>DevOps</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>Frontend Development</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>CI/CD</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>Fullstack Engineering</span>
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400'>Cloud Engineering</span>
                    </span>
                </span><br />
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Role Today</span></motion.h1>
            <motion.h2 variants={children} className="mt-5 mb-5 max-w-5xl  text-2xl sm:text-3xl md:text-4xl">Search through the latest opportunities in software engineering. Get hired fast with positions updated daily</motion.h2>
            <motion.div variants={children} className='flex gap-3'>
                <NavLink to="/jobs" className="bg-linear-to-br from-emerald-400 to-emerald-700 px-4 py-2 rounded border-2 border-slate-500 cursor-pointer text-lg sm:text-4xl">Browse</NavLink>
            </motion.div>
            <div className="w-full max-w-5xl mt-8 px-2 sm:px-0">
                <img src="https://images.unsplash.com/photo-1573495804658-7885a640fc1c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" className="w-full  max-h-160  object-cover rounded-lg"/>
            </div>
        </motion.div>
    )
}

export default Hero
