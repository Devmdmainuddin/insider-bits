import { BlogCard } from "@/components/card/BlogCard";
import React from "react";
import blogPosts from "../../httpActions/blogs/data";
import HottestPosts from "@/components/sidebar/HottestPosts";
import FeaturedPost from "@/components/sidebar/FeaturedPost";
import Tags from "@/components/sidebar/Tags";
import Ads from "@/components/sidebar/Ads";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ searchParams }: PageProps) => {
  const selectedTag = searchParams.tag as string;

  const blogs = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="container mx-auto">
      <div className="md:grid grid-cols-6 gap-12 mb-[87px]">
        <section className="col-span-4">
          <div className="grid md:grid-cols-2 gap-3 ">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
        <aside className="hidden md:block col-span-2">
          <HottestPosts />
          <FeaturedPost />
          <Tags />
          <Ads />
        </aside>
      </div>
    </div>
  );
};

export default page;
