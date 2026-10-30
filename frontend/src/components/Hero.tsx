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
        <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="absolute inset-0 bg-black/50"></div>
            <motion.div variants={parent} initial="hidden" animate="visible" className="relative z-10 flex flex-col min-h-screen justify-center items-center text-center px-4 py-16 sm:px-8 md:px-12 lg:px-16">
                <motion.h1 variants={children} className="mt-4 mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white">
                    <h1>Finding Your Dream</h1>
                    <span className="text-rotate">
                        <span className="justify-items-center">
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Software Engineering</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">DevOps</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Frontend Development</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">CI/CD</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Fullstack Engineering</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Cloud Engineering</span>
                        </span>
                    </span>
                    <br />
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Role Today</span>
                </motion.h1>
                <motion.h2 variants={children} className="mt-5 mb-5 max-w-5xl text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white">
                    Search through the latest opportunities in software engineering.
                    Get hired fast with positions updated daily.
                </motion.h2>
                <motion.div variants={children} className="flex gap-3">
                    <NavLink to="/jobs" className="bg-linear-to-br from-blue-500 to-amber-300 px-6 py-3 rounded-full border-2  cursor-pointer text-lg sm:text-2xl md:text-3xl text-white">Browse</NavLink>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero
