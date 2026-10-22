import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogout, useAuthenticatedUser } from "../authContext/useAuth";
import { Ellipsis, House, TableOfContents, Handshake, Menu, X, UserRoundArrowLeft, BriefcaseConveyorBelt, Bell } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {

    const parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    const children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }

    const [open, setOpen] = useState<null | number>(null);
    const { mutate } = useLogout();
    const { data: user, isLoading } = useAuthenticatedUser();
    const navigate = useNavigate();

    function handleClick() {
        mutate(undefined, {
            onSuccess: () => {
                navigate("/login");
            },
        });
    }

    function handleOpen(index: number) {
        setOpen((prev) => prev === index ? null : index)
    }


    return (
        <header className="sticky top-0 z-50">
            <nav className=" flex items-center justify-between px-5 py-1.5 sm:px-10  lg:px-15 bg-white/10 backdrop-blur-xl border-b border-white/20">
                <NavLink to="/" className="cursor-pointer text-lg flex items-center gap-2">
                    <House aria-label="Home" className="cursor-pointer flex justify-center items-center transition-all hover:scale-125 hover:underline duration-300" size={28} />
                    <h1>TechJob Finder</h1>
                </NavLink>
                <ul className="space-x-5 hidden sm:flex">
                    <NavLink to="/jobs" className="text-md cursor-pointer flex flex-col justify-center items-center transition-all hover:text-slate-200 hover:underline duration-200">
                        <BriefcaseConveyorBelt size={22} />
                        <h1 className="text-sm">Jobs</h1>
                    </NavLink>
                    <button type="button" aria-label="notifications" className="cursor-pointer flex flex-col justify-center items-center hover:text-slate-200 hover:underline duration-200">
                        <Bell size={20} />
                        <h1 className='text-sm'>Notifications</h1>
                    </button>
                    <button type="button" className="text-md cursor-pointer flex flex-col justify-center items-center transition-all hover:text-slate-200 hover:underline duration-200" onClick={() => handleOpen(1)}>
                        <Ellipsis size={20} />
                        <h1 className="text-sm">More</h1>
                    </button>
                </ul>
                <div className="hidden sm:flex justify-center items-center ">
                    {!isLoading && user ? (
                        <button className=' items-center justify-center border border-white w-8 h-8 rounded-full bg-slate-700 hidden sm:flex' onClick={() => handleOpen(0)}>
                            <span className="cursor-pointer">{user.name.slice(0, 2).toUpperCase()}</span>
                        </button>
                    ): (
                    <NavLink className='bg-amber-500 p-2 rounded-md' to='/login'>Login</NavLink>
                    )}
                </div>
                        {open === 0 && <ProfileCard onClose={() => setOpen(null)} />}

                <motion.button type="button" variants={children} className="cursor-pointer flex sm:hidden" onClick={() => handleOpen(2)}>
                    {open === 2 ? (<X size={20} />) : (<Menu size={20} />)}
                </motion.button>
            </nav>

            <AnimatePresence>
                {
                    open === 2 && (
                        <motion.nav className=" px-10 py-3 mx-10" variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: 50 }}>
                            <ul className="flex flex-col space-y-2 justify-start md:hidden">
                                <li className="text-md cursor-pointer flex justify-center items-center transition-all hover:underline duration-200" onClick={() => handleOpen(null)}>About</li>
                                <NavLink to="/jobs" className="text-md cursor-pointer flex justify-center items-center transition-all hover:underline duration-200" onClick={() => handleOpen(null)}>Jobs</NavLink>
                                {
                                    !isLoading && user ?
                                        <div className="rounded-lg flex md:hidden gap-2 p-2 justify-center items-center">
                                            <NavLink to="/profile" className="cursor-pointer transition-all hover:scale-107 hover:underline duration-300 bg-linear-to-tr from-slate-100 to-cyan-400 text-transparent bg-clip-text text-md">{user.name}</NavLink>
                                            <div className="text-3xl text-emerald-500">|</div>
                                            <button type="button" className="text-md transition-all hover:scale-107 hover:underline duration-300 cursor-pointer border px-2 py-1" onClick={handleClick}>Log Out</button>
                                        </div>
                                        :
                                        <NavLink className="flex md:hidden justify-center items-center gap-2 px-5 py-2cursor-pointer transition-all hover:scale-110 hover:underline duration-300" to="/login">
                                            <UserRoundArrowLeft className='border bg-gray-500 rounded-full px-' size={22} />
                                            <h1 className="text-md">Log In</h1>
                                        </NavLink>
                                }
                            </ul>
                        </motion.nav>
                    )
                }
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.nav variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: 50 }} className='absolute top-15 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/10'>
                        <section className='px-5 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10 mb-10'>
                            <motion.div variants={children} className='space-y-4 mb-7'>
                                <h2 className='text-md font-bold tracking-tighter' >Resources</h2>
                                <div className='mt-3 flex space-x-4'>
                                    <House aria-label="House" size={20} />
                                    <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                                        <NavLink to="/blog" className='text-sm font-semibold underline' onClick={() => setOpen(null)} >Blog</NavLink>
                                        <h2 className='text-sm'>Read Industry Insights.</h2>
                                    </motion.div>
                                </div>

                                <div className='mt-2 flex space-x-4'>
                                    <TableOfContents aria-label="Table of Contents" size={20} />
                                    <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                                        <a href='/#faq' className='text-sm font-semibold underline' onClick={() => setOpen(null)} >FAQ</a>
                                        <h2 className='text-sm'>Common Questions Asked.</h2>
                                    </motion.div>
                                </div>

                                <div className='mt-2 flex space-x-4'>
                                    <Handshake aria-label="Handshake" />
                                    <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                                        <a href='/#support' className='text-sm font-semibold underline' onClick={() => setOpen(null)} >Support</a>
                                        <h2 className='text-sm'>We are here to help.</h2>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div variants={children} className='space-y-4'>
                                <h2 className='text-md font-bold tracking-tighter' >Latest Insights</h2>
                                <div className='mt-3 flex space-x-3'>
                                    <motion.div variants={children} whileHover={{ scale: 1.05 }} className='p-10 w-50 rounded-xl bg-[url("https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg")] bg-cover bg-center bg-no-repeat'>
                                    </motion.div>
                                    <div>
                                        <h1 className='text-sm font-semibold'>Finding Your Next Role</h1>
                                        <h2 className='text-sm'>Tips for landing positions.</h2>
                                        <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                                            <NavLink to='/insights' className='text-sm underline' onClick={() => setOpen(null)} >Read More</NavLink>
                                        </motion.div>
                                    </div>
                                </div>


                            </motion.div>

                            <motion.div variants={children} className='space-y-4 sm:space-y-2'>
                                <h2 className='text-md font-bold tracking-tighter sm:pr-12' >Contact</h2>
                                <div>
                                    <h2 className='text-sm'>Get In touch with us.</h2>
                                </div>

                                <div className=' text-sm flex flex-col'>
                                    <p>Email</p>
                                    <motion.a variants={children} whileHover={{ scale: 1.05 }} className='font-semibold' href="nothtekayjay@icloud.com<">nothtekayjay@icloud.com</motion.a>
                                </div>

                                <div className=' text-sm flex flex-col'>
                                    <p>Telephone</p>
                                    <motion.a variants={children} whileHover={{ scale: 1.05 }} className='font-semibold' href="tel:+447931558921">+44 (0)7931 55 8921</motion.a>
                                </div>
                            </motion.div>
                        </section>
                    </motion.nav>

                )}
            </AnimatePresence>
        </header>
    )
}
export default Navbar
