import { useForm } from 'react-hook-form'

interface Support {
    firstname: string,
    lastname: string,
    email: string,
    text: string
}

const Support = () => {

    const { register, handleSubmit, formState:{errors} } = useForm<Support>()

    function onSubmit() {
        console.log("booty")

    }


    return (
        <div className='relative  w-full bg-[url("https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")] bg-scroll md:bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative z-10 flex flex-col px-4 py-12 sm:px-6 md:px-8 lg:px-16'>
                <div className="mt-4 mb-8 w-full max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                    <h1>READY TO LAND YOUR DESIRED JOB?</h1>
                    <span>CONTACT US</span>
                </div>
                <form className='flex flex-col gap-5 mt-5 mb-5 w-full max-w-3xl text-base sm:text-lg text-white'onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="firstname">Firstname</label>
                            <input id="firstname" name="firstname" type="text" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400'{...register("firstname", {required: "Enter your first name"})} />
                            {errors.firstname && <p className='text-red-400 text-md font-semibold flex items-center my-2'>{errors.firstname.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="lastname">Lastname</label>
                            <input id="lastname" name="lastname" type="text" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400' {...register("lastname", {required: "Enter your last name"})}/>
                            {errors.lastname && <p className='text-red-400 text-md font-semibold flex items-center my-2'>{errors.lastname.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" className='w-full rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400' {...register("email", {required: "Enter your email"})}/>
                            {errors.email && <p className='text-red-400 text-md font-semibold flex items-center my-2'>{errors.email.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} className='w-full resize-y rounded-lg bg-white/90 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sky-400'{...register("text", {required: "Enter your message"})}></textarea>
                            {errors.text && <p className='text-red-400 text-md font-semibold flex items-center my-2'>{errors.text.message}</p>}
                        </div>
                    </div>
                    <button type="submit" className='animated-border px-10  w-full sm:w-fit self-center rounded-lg bg-sky-600  py-5 text-white transition-all duration-300 hover:bg-sky-700 cursor-pointer'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Support
