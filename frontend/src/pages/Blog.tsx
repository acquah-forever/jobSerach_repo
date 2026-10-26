import { useBlogs } from '../authContext/useAuth5'

const Blog = () => {
  const { data: blogs, isLoading } = useBlogs()

  return (
    <div className='flex justify-center gap-7'>
      <div className='max-w-400 w-full mt-20 grid grid-cols-1 space-y-7 justify-items-center sm:grid-cols-2 px-70'>
        {
          !isLoading && blogs?.length > 0 && blogs?.map((item) => (
            <div className='card w-90 sm:w-110 bg-base-100 card-xl shadow-sm text-black' >
              <div className='card-body' key={item._id}>
                <span>{item.section}</span>
                <h1 className='font-semibold text-md md:text-xl'>{item.title}</h1>
                <p className='text-md '>{item.blurb}</p>
                <div className='flex justify-start mt-7'>
                  <button className="btn btn-soft btn-secondary">Read More</button>
                </div>
              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Blog
