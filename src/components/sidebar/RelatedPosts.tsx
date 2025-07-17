import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

const RelatedPosts = () => {
  return (
    <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px]">
      <span className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px]">
        Related Posts
      </span>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
      <div>
        <Image
          src="/1.png"
          alt="blog image"
          width={405}
          height={123}
          className=""
        />
        <div className="flex items-center justify-between mt-[17px]">
          <h3 className="text-[#0E0D0D] dark:text-gray-200 font-inter text-sm font-medium leading-5">
            Never settle for less
          </h3>
          <Ellipsis />
        </div>

        <div className="flex gap-2 items-center mt-[6px]">
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Post by
          </span>{" "}
          <Image
            src="/1.png"
            alt="author image"
            width={34}
            height={34}
            className="rounded-full w-8 h-8"
          />{" "}
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Mark.A
          </span>
        </div>
      </div>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
      <div>
        <Image
          src="/1.png"
          alt="blog image"
          width={405}
          height={123}
          className=""
        />
        <div className="flex items-center justify-between mt-[17px]">
          <h3 className="text-[#0E0D0D] dark:text-gray-200 font-inter text-sm font-medium leading-5">
            Never settle for less
          </h3>
          <Ellipsis />
        </div>

        <div className="flex gap-2 items-center mt-[6px]">
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Post by
          </span>{" "}
          <Image
            src="/1.png"
            alt="author image"
            width={34}
            height={34}
            className="rounded-full w-8 h-8"
          />{" "}
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Mark.A
          </span>
        </div>
      </div>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
      <div>
        <Image
          src="/1.png"
          alt="blog image"
          width={405}
          height={123}
          className=""
        />
        <div className="flex items-center justify-between mt-[17px]">
          <h3 className="text-[#0E0D0D] dark:text-gray-200 font-inter text-sm font-medium leading-5">
            Never settle for less
          </h3>
          <Ellipsis />
        </div>

        <div className="flex gap-2 items-center mt-[6px]">
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Post by
          </span>{" "}
          <Image
            src="/1.png"
            alt="author image"
            width={34}
            height={34}
            className="rounded-full w-8 h-8"
          />{" "}
          <span className="text-[#0E0D0D] dark:text-gray-200 font-inter text-xs font-medium leading-4">
            Mark.A
          </span>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
