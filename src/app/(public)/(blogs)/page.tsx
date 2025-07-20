"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Hero from "@/components/Slider/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import blogPosts from "../httpActions/blogs/data";
import { BlogCard } from "@/components/card/BlogCard";
import { useState } from "react";

export default function Home() {
  const blogs = blogPosts;
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const categories = ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [visibleCategorizedBlogs, setVisibleCategorizedBlogs] = useState(
    blogs.slice(0, 2)
  );

  const loadMore = () => {
    setVisibleBlogs((prev) => prev + 2);
  };

  const loadMoreCategorized = () => {
    const filteredBlogs =
      selectedCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === selectedCategory);
    setVisibleCategorizedBlogs((prev) => [
      ...prev,
      ...filteredBlogs.slice(prev.length, prev.length + 2),
    ]);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const filteredBlogs =
      category === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === category);
    setVisibleCategorizedBlogs(filteredBlogs.slice(0, 2));
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      <Hero />
      {/* Discover Today's Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Discover Today&apos;s</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">01</span>
              <div>
                <h3 className="font-semibold">
                  Foodie Diaries: Recipes for Every Occasion
                </h3>
                <p className="text-sm text-gray-600">
                  Explore culinary adventures
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Link href="/blog/1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Life Style</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Sort By</span>
                  <select className="border rounded px-3 py-1 text-sm">
                    <option>Recent Post</option>
                  </select>
                </div>
              </div>
            </Link>
            {/* Article Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {blogs.slice(0, 2).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe To Get Update
              </h3>
              <p className="text-gray-600 mb-4">Latest Blog Post</p>
              <div className="flex max-w-md mx-auto">
                <Input placeholder="Enter Email" className="rounded-r-none" />
                <Button className="bg-green-500 hover:bg-green-600 rounded-l-none">
                  ✓
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Don&apos;t Worry! We Don&apos;t Spam!
              </p>
            </div>

            {/* Spot Light Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Spot Light</h3>
              <div className="flex space-x-4 mb-4">
                <Badge variant="secondary">Food</Badge>
                <Badge variant="secondary">Fashion</Badge>
                <Badge variant="secondary">Tech</Badge>
                <Badge variant="secondary">Beauty</Badge>
                <Badge variant="secondary">Gaming</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {blogs.slice(0, visibleBlogs).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            <div className="text-center">
              {visibleBlogs < blogs.length && (
                <Button
                  variant="outline"
                  className="px-6 bg-transparent"
                  onClick={loadMore}
                >
                  LOAD MORE →
                </Button>
              )}
            </div>
            {/* Posts by Category Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Posts by Category</h3>
              <div className="flex flex-wrap space-x-4 mb-4">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    onClick={() => handleCategoryClick(category)}
                    className="cursor-pointer mb-2"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {visibleCategorizedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              <div className="text-center mt-4">
                {visibleCategorizedBlogs.length < filteredBlogs.length && (
                  <Button
                    variant="outline"
                    className="px-6 bg-transparent"
                    onClick={loadMoreCategorized}
                  >
                    LOAD MORE →
                  </Button>
                )}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
