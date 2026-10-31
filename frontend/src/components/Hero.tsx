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

        <div className="relative min-h-screen w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center bg-no-repeat bg-fixed max-md:bg-scroll">
            <div className="absolute inset-0 bg-black/50"></div>
            <motion.div variants={parent} initial="hidden" animate="visible" className="relative z-10 flex min-h-screen w-full flex-col justify-center items-center text-center px-4 py-16 sm:px-6 md:px-8 lg:px-16">
                <motion.h1 variants={children} className="mt-4 mb-4 w-full text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight text-white">
                    <span className="block">Finding Your Dream</span>
                    <span className="text-rotate">
                        <span className="flex flex-col items-center">
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Software Engineering</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">DevOps</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Frontend Development</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">CI/CD</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Fullstack Engineering</span>
                            <span className="bg-clip-text text-transparent bg-linear-to-br from-sky-300 via-purple-100 to-amber-400">Cloud Engineering</span>
                        </span>
                    </span>
                    <br />
                    <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">Role Today</span>
                </motion.h1>
                <motion.h2 variants={children} className="mt-5 mb-5 w-full max-w-5xl text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed text-white">
                    Search through the latest opportunities in software engineering.
                    Get hired fast with positions updated daily.
                </motion.h2>
                <motion.div variants={children} className="flex justify-center gap-3">
                    <NavLink to="/jobs" className="animated-border px-8 sm:px-10 rounded-[calc(1rem-2px)] py-4 sm:py-5 cursor-pointer text-base sm:text-xl md:text-2xl text-white">Browse</NavLink>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Hero
