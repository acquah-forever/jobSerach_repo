import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'motion/react'

const Faq = () => {

    const parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.8 } }
    }

    const children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }

    const [open, setOpen] = useState<number | null>(null)

    function handleClick(index: number) {
        setOpen((prev) => (prev === index ? null : index))
    }
    return (
        <div className='relative bg-[url(https://images.unsplash.com/photo-1637094408647-0d81d08f81b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)] bg-cover bg-center bg-no-repeat bg-fixed'>
            <div className='absolute bg-black/30 inset-0'></div>
            <motion.section id='faq' variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className='relative z-10 flex text-white w-full flex-col items-center px-4 sm:px-6 sm:py-24'>
                <div className='mb-10 max-w-3xl space-y-3 text-center sm:mb-16 sm:space-y-4'>
                    <motion.h1 variants={children} className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>FAQ</motion.h1>
                    <motion.p variants={children} className='text-3xl md:text-4xl lg:text-5xl xl:text-6xlfont-semibold'>Questions about how TechJob Finder works and what we offer.</motion.p>
                </div>

                <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.02 }} className='mb-5 w-full max-w-5xl border p-4 sm:mb-7 sm:p-7' onClick={() => handleClick(1)}>
                    <motion.div variants={children} className='mb-4 flex items-center justify-between gap-4'>
                        <h3>How often are jobs posted ?</h3>
                        <button type="button" aria-expanded={open === 1} aria-label="Toggle answer: How often are jobs posted?" className="shrink-0" >
                            {open === 1 ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </motion.div>

                    {open === 1 && (
                        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                            <motion.p variants={children}>New positions arrive daily from companies actively hiring. We refresh listings regularly so
                                you never miss an opportunity. The best jobs move fast, and we make sure you see them first.
                            </motion.p>
                        </motion.div>
                    )}

                </motion.div>

                <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.02 }} className='mb-5 w-full max-w-5xl border p-4 sm:mb-7 sm:p-7' onClick={() => handleClick(2)}>
                    <motion.div variants={children} className='mb-4 flex items-center justify-between gap-4'>
                        <h3>Can I filter by location ?</h3>
                        <button type="button" aria-expanded={open === 2} aria-label="Toggle answer: Can I filter by location?" className="shrink-0" >
                            {open === 2 ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </motion.div>

                    {open === 2 && (
                        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                            <motion.p variants={children}>Yes. Filter by remote, on-site or specific cities. You can also combine location with the role type and
                                experience level. Our search understands what you want and shows only what matches.
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.02 }} className='mb-5 w-full max-w-5xl border p-4 sm:mb-7 sm:p-7' onClick={() => handleClick(3)}>
                    <motion.div variants={children} className='mb-4 flex items-center justify-between gap-4'>
                        <h3>Is there a cost to use this ?</h3>
                        <button type="button" aria-expanded={open === 3} aria-label="Toggle answer: Is there a cost to use this?" className="shrink-0" >
                            {open === 3 ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </motion.div>

                    {open === 3 && (
                        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <motion.p variants={children} >This is free for job seekers. Browse, search and apply without paying anything. We make
                                money from employers, not from you
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.02 }} className='mb-5 w-full max-w-5xl border p-4 sm:mb-7 sm:p-7' onClick={() => handleClick(4)}>
                    <motion.div variants={children} className='mb-4 flex items-center justify-between gap-4'>
                        <h3>How do you curate jobs?</h3>
                        <button type="button" aria-expanded={open === 4} aria-label="Toggle answer: How do you curate jobs?" className="shrink-0">
                            {open === 4 ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </motion.div>

                    {open === 4 && (
                        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <motion.p variants={children}>We review every position to ensure quality. No spam, no dead ends, no companies with bad
                                reputations. We show you positions from places worth your time.
                            </motion.p>
                        </motion.div>
                    )}

                </motion.div>

                <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.02 }} className='mb-5 w-full max-w-5xl border p-4 sm:mb-7 sm:p-7' onClick={() => handleClick(5)}>
                    <motion.div variants={children} className='mb-4 flex items-center justify-between gap-4'>
                        <h3>Can I set job alerts ?</h3>
                        <button type="button" aria-expanded={open === 5} aria-label="Toggle answer: Can I set job alerts?" className="shrink-0" >
                            {open === 5 ? <ChevronUp /> : <ChevronDown />}
                        </button>
                    </motion.div>

                    {open === 5 && (
                        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <motion.p variants={children}>Not yet, but it is coming soon. For now, check back daily or use our search to find roles matching your
                                criteria. New listings arrive consistently.
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.section>

        </div>
    )
}

export default Faq
