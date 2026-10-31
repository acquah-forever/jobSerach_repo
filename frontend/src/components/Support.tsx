
const Support = () => {
    return (
        <div className='relative min-h-screen w-full bg-[url("https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")] bg-scroll md:bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='relative z-10 flex flex-col items-center px-4 py-12 sm:px-6 md:px-8 lg:px-16'>
                <div className="mt-4 mb-8 w-full max-w-5xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight text-white text-center">
                    <h1>READY TO LAND YOUR DESIRED JOB?</h1>
                    <span>CONTACT US</span>
                </div>
                <form className='flex flex-col gap-5 mt-5 mb-5 w-full max-w-3xl text-base sm:text-lg text-white' action="">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="firstname">Firstname</label>
                            <input id="firstname" name="firstname" type="text" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="lastname">Lastname</label>
                            <input id="lastname" name="lastname" type="text" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} className='w-full resize-y rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400'></textarea>
                        </div>
                    </div>
                    <button type="submit" className='animated-border px-8 sm:px-10 rounded-[calc(1rem-2px)] w-full sm:w-fit self-center rounded-lg bg-sky-600 px-10 py-5 text-white transition-all duration-300 hover:bg-sky-700 cursor-pointer'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Support
