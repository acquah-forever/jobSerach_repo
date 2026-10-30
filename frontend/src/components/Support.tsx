
const Support = () => {
    return (
        <div className='relative min-h-screen bg-[url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)] bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-black/10'></div>
            <div className='relative z-10'>
                <div>
                    <h1>READY TO LAND YOUR DESIRED JOB?</h1>
                    <span>CONTACT US</span>
                </div>
                <form action="">
                    <div>
                        <label htmlFor="firstname"></label>
                        <input type="text" />
                        <label htmlFor="lastname"></label>
                        <input type="text" />
                    </div>
                    <label htmlFor="email"></label>
                    <input type="email" />
                    <label htmlFor="message"></label>
                    <input type="text" />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Support
