import React from "react";
import Image from "next/image";
import blogPosts from "@/app/(public)/httpActions/blogs/data";
import Link from "next/link";

const FeaturedPost = () => {
  const blogs = blogPosts;
  return (
    <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px] mt-6">
      <span className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px]">
        Featured Posts
      </span>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
      {blogs.map((blog) => (
     <div  key={blog.id}>
<div className="flex space-x-3">
        <Image
          src="/1.png"
          alt="Featured post"
          width={60}
          height={60}
          className="rounded object-cover"
        />
        <div>
          <p className="text-sm text-gray-600">{blog.publishedAt}</p>
         
          <h5 className="font-semibold text-sm">
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </h5>
        </div>
       
      </div>
       <hr className=" bg-[#F3F3F3] my-[26px]" />
     </div>
 
                  
      ))}
     
   
    </div>
  );
};

export default FeaturedPost;
