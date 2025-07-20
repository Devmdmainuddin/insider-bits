import React from 'react';
import blogPosts from '@/app/(public)/httpActions/blogs/data';
import Link from 'next/link';

const Tags = () => {
  const allTags = blogPosts.flatMap(post => post.tags);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px] mt-6">
      <span className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px]">
        Discover By Tags
      </span>
      <hr className="bg-[#F3F3F3] my-[26px]" />
      <div className="space-y-2">
        {sortedTags.map(([tag, count]) => (
          <div key={tag} className="flex justify-between">
            <Link href={`/blogs?tag=${tag}`} className="text-sm hover:text-blue-500">
              {tag} ({count})
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;