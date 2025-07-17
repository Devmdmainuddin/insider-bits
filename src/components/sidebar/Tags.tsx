import React from 'react'

const Tags = () => {
  return (
     <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px] mt-6">
      <span className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px]">
       Discover By Tags
      </span>
      <hr className=" bg-[#F3F3F3] my-[26px]" />
     <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Beauty (25)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Gaming (50)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Fashion (30)</span>
            <span className="text-sm">Tech (15)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Parenting (25)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Art (20)</span>
            <span className="text-sm">Events (15)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Travel (50)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">About Us</span>
            <span className="text-sm">Terms & Conditions</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Support</span>
            <span className="text-sm">Privacy Policy</span>
          </div>
        </div>
        </div>
  )
}

export default Tags