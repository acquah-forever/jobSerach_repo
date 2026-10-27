import { useState } from 'react'
import { useBlogs, useBlog } from '../authContext/useAuth5'
import { X } from 'lucide-react'
import { useRef } from 'react';
import { useOnClickOutside } from "usehooks-ts";

const Blog = () => {
  const [selectedBlog, setSelectedJob] = useState<string | null>(null);
  const { data: blogs, isLoading } = useBlogs();
  const { data: blog } = useBlog(selectedBlog);
  const blogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(blogRef, () => setSelectedJob(null));

  function handleClick(blogId: string) {
    setSelectedJob(blogId)
  };

  function handleClose() {
    setSelectedJob(null)

  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {!isLoading &&
          blogs?.length > 0 &&
          blogs.map((item) => (
            <div key={item._id} className="card card-xl w-full max-w-md bg-base-100 text-black shadow-sm">
              <div className="card-body">
                <img src={item.imageUrl} alt={item.title} className="mb-4 w-full h-48 object-cover" />
                <span>{item.section}</span>
                <h2 className="break-words text-base font-semibold sm:text-lg md:text-xl">{item.title}</h2>
                <p className="text-sm sm:text-base text-wrap">{item.blurb}</p>
                <div className="mt-6 flex justify-start">
                  <button className="btn btn-soft btn-secondary" onClick={() => handleClick(item._id)}>Read More</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedBlog && (
        <div className="border fixed inset-0 z-50 flex justify-center items-start overflow-y-scroll bg-mauve-900/50 p-4 text-black sm:items-center sm:p-8 px-10">
          <div ref={blogRef} className='p-5 my-auto w-full max-w-5xl min-h-screen rounded-lg bg-white'>
            <div className='mb-7 flex justify-between'>
              <h1 className='text-xl sm: text-2xl md:text-3xl font-semibold'>{blog?.title}</h1>
              <button type="button" aria-label="Close Blog" onClick={handleClose}>
                <X className="cursor-pointer" size={22} />
              </button>
            </div>
            <div className='px-10'>
              <p className='mb-7 '>{blog?.body1}</p>
              <p className='font-semibold mb-4'>{blog?.body2}</p>
              <p className='font-semibold mb-4'>{blog?.body3}</p>
              <p className='font-semibold mb-4'>{blog?.body4}</p>
              <p className='font-semibold mb-4'>{blog?.body5}</p>
              <p className='font-semibold mb-4'>{blog?.body6}</p>
            </div>

          </div>


        </div>

      )}
    </div>
  )
};

export default Blog;
