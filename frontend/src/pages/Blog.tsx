import { useBlog } from "../authContext/useAuth5"

const Blog = () => {
  const { data: blog } = useBlog()

  return (
    <div>
      {
        blog?.map((item) => (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))
      }

    </div>
  )
}

export default Blog
