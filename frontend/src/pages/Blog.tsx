import { useBlogs } from '../authContext/useAuth5'

const Blog = () => {
  const { data: blogs, isLoading } = useBlogs()

  return (
    <div className="card w-96 bg-base-100 card-xl shadow-sm text-black">
      <div className="card-body">
        {
          !isLoading && blogs?.length > 0 && blogs?.map((item) =>
            <div>
              <span>{item.section}</span>
              <h1>{item.title}</h1>
              <p>{item.blurb}</p>
            </div>
          )
        }
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
