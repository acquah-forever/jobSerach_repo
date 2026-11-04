import { useState } from 'react'
import { useBlogs, useBlog } from '../authContext/useAuth5'
import { useRef } from 'react';
import { useOnClickOutside } from "usehooks-ts";
import { User, Heart } from 'lucide-react'

const Blog = () => {
  const { data: blogs, isLoading } = useBlogs();
  const [selectedBlog, setSelectedJob] = useState<string | null>(null);
  const { data: blog } = useBlog(selectedBlog);
  const blogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(blogRef, () => setSelectedJob(null));

  function handleClick(blogId: string) {
    setSelectedJob(blogId)
  };

  return (
    <div className="min-h-screen w-full px-4 py-7  sm:px-6 lg:px-8 bg-linear-to-br from-[#FBFAF7] via-[#F5F2EB] to-[#EBE6DB]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {!isLoading &&
          blogs?.length > 0 &&
          blogs.map((item) => (
            <div key={item._id} className="relative card card-xl w-full  border-2 border-black max-w-md  text-slate-500 shadow-sm bg-white/10 backdrop-blur-xl">
              <img src="https://cdn.pixabay.com/photo/2026/10/27/18/29/18-29-41-437_1280.jpg" alt="image" />
              <div className="card-body">
                <span>{item.section}</span>
                <h2 className="wrap-break-word text-base font-semibold sm:text-lg md:text-xl text-black">{item.title}</h2>
                <p className="text-sm sm:text-base text-wrap">{item.blurb}</p>
                <div className="mt-6 flex justify-start">
                  <button className="btn btn-soft btn-secondary border-black" onClick={() => handleClick(item._id)}>Read More</button>
                </div>
                <div className='absolute bottom-4 right-4 flex justify-end'>
                  <Heart size={30} />
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedBlog && (
        <div className="bg-white/10 backdrop-blur-xl fixed inset-0 z-50 flex justify-center items-start overflow-y-scroll p-4 text-black sm:items-center sm:p-8 px-10">
          <div ref={blogRef} className='bg-white/10 backdrop-blur-xl p-5 my-auto w-full max-w-5xl min-h-screen rounded-lg  space-y-10 border-2-hidden sm:border-2 border-black' >
            <div className="avatar flex items-center space-x-3">
              <div className="border w-11 sm:w-12 rounded-full">
                <User className='m-2' size={27} />
              </div>
              <p className='text-xs'>Admin</p>
              <p className='text-xs'>. Oct 3, 2026</p>
              <p className='text-xs'>. 1 min read</p>
            </div>
            <h1 className='text-xl md:text-3xl font-semibold '>{blog?.title}</h1>
            <p className='text-xs'>Updated: Nov 4, 2026</p>

            <img className='w-full bg-cover bg-center bg-no-repeat bg-fixed' src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593361_1280.jpg" alt="image" />

            <div className='px-10'>
              <p className='mb-7 italic '>{blog?.body1}</p>
              <p className=' mb-4 italic'>{blog?.body2}</p>
              <p className='italic mb-4'>{blog?.body3}</p>
              <p className='italic mb-4'>{blog?.body4}</p>
              <p className='italic mb-4'>{blog?.body5}</p>
            </div>

          </div>


        </div>

      )}
    </div>
  )
};

export default Blog;
