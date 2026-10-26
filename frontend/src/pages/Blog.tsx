import { useBlogs } from '../authContext/useAuth5'

const Blog = () => {
  const { data: blogs, isLoading } = useBlogs()

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {!isLoading &&
          blogs?.length > 0 &&
          blogs.map((item) => (
            <div key={item._id} className="card card-xl w-full max-w-md bg-base-100 text-black shadow-sm">
              <div className="card-body">
                <span>{item.section}</span>
                <h2 className="break-words text-base font-semibold sm:text-lg md:text-xl">{item.title}</h2>
                <p className="break-words text-sm sm:text-base">{item.blurb}</p>
                <div className="mt-6 flex justify-start">
                  <button className="btn btn-soft btn-secondary">Read More</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Blog
