import React from "react";
import Image from "next/image";

const FeaturedPost = () => {
  return (
     <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px] mt-6">
      <span className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px]">
        Featured Posts
      </span>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
      <div className="flex space-x-3">
      <Image
        src="/1.png"
        alt="Featured post"
        width={60}
        height={60}
        className="rounded object-cover"
      />
      <div>
        <p className="text-sm text-gray-600">Sunday, 2024</p>
        <h5 className="font-semibold text-sm">
          A Guide to Better Sleep Habits
        </h5>
      </div>
    </div>
    <hr className=" bg-[#F3F3F3] my-[26px]" />
    <div className="flex space-x-3">
      <Image
        src="/1.png"
        alt="Featured post"
        width={60}
        height={60}
        className="rounded object-cover"
      />
      <div>
        <p className="text-sm text-gray-600">Sunday, 2024</p>
        <h5 className="font-semibold text-sm">
          A Guide to Better Sleep Habits
        </h5>
      </div>
    </div>
    <hr className=" bg-[#F3F3F3] my-[26px]" />
<div className="flex space-x-3">
      <Image
        src="/1.png"
        alt="Featured post"
        width={60}
        height={60}
        className="rounded object-cover"
      />
      <div>
        <p className="text-sm text-gray-600">Sunday, 2024</p>
        <h5 className="font-semibold text-sm">
          A Guide to Better Sleep Habits
        </h5>
      </div>
    </div>
      </div>
    
  );
};

export default FeaturedPost;
