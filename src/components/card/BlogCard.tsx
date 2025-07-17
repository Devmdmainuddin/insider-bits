import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

import Link from "next/link";
import { BlogPost } from "@/app/(public)/httpActions/blogs/schemas";

export const BlogCard = ({ blog }: { blog: BlogPost }) => {
 
  return (
    <Card className="overflow-hidden -p-6">
     
      <div className="relative h-48">
        <Image
          src='/1.png'
          alt=''
          width={500}
          height={500}
          className="w-full h-full object-cover "
          loading="lazy"
        />
        <Badge className="absolute top-4 left-4 bg-teal-500 text-white">
        {blog.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <span>{blog.author.name}</span>
          <span>•</span>
          <span>{blog.publishedAt}</span>
        </div>
        <h3 className="font-semibold mb-2">
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
   
        </h3>
      </CardContent>
    </Card>
  );
};
