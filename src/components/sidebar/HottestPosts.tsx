import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HottestPosts = () => {
  return (
    <div className="py-[22px] px-6 border border-[#F3F3F3] rounded-[3px] mt-6">
              <h2 className="text-[#000000] dark:text-gray-800 bg-[#F3F3F3] rounded-[9px] font-inter text-base font-medium leading-[120%] py-[6px] px-[13px] flex gap-1 items-center max-w-[150px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1017_1367)">
                    <path
                      d="M4.4448 4.59124C4.37355 5.35124 4.32355 6.69624 4.7723 7.26874C4.7723 7.26874 4.56105 5.79124 6.4548 3.93749C7.2173 3.19124 7.39355 2.17624 7.1273 1.41499C6.97605 0.983737 6.6998 0.627487 6.4598 0.378737C6.3198 0.232487 6.4273 -0.00876257 6.63105 -1.25698e-05C7.86355 0.0549874 9.86105 0.397487 10.7098 2.52749C11.0823 3.46249 11.1098 4.42874 10.9323 5.41124C10.8198 6.03874 10.4198 7.43374 11.3323 7.60499C11.9836 7.72749 12.2986 7.20999 12.4398 6.83749C12.4986 6.68249 12.7023 6.64374 12.8123 6.76749C13.9123 8.01874 14.0061 9.49249 13.7786 10.7612C13.3386 13.2137 10.8548 14.9987 8.3873 14.9987C5.3048 14.9987 2.85105 13.235 2.2148 10.0425C1.95855 8.75374 2.08855 6.20374 4.07605 4.40374C4.22355 4.26874 4.4648 4.38874 4.4448 4.59124Z"
                      fill="url(#paint0_radial_1017_1367)"
                    />
                    <path
                      d="M9.51384 9.17739C8.37759 7.71489 8.88634 6.04614 9.16509 5.38114C9.20259 5.29364 9.10259 5.21114 9.02384 5.26489C8.53509 5.59739 7.53384 6.37989 7.06759 7.48114C6.43634 8.96989 6.48134 9.69864 6.85509 10.5886C7.08009 11.1249 6.81884 11.2386 6.68759 11.2586C6.56009 11.2786 6.44259 11.1936 6.34884 11.1049C6.07913 10.846 5.88694 10.517 5.79384 10.1549C5.77384 10.0774 5.67259 10.0561 5.62634 10.1199C5.27634 10.6036 5.09509 11.3799 5.08634 11.9286C5.05884 13.6249 6.46009 14.9999 8.15509 14.9999C10.2913 14.9999 11.8476 12.6374 10.6201 10.6624C10.2638 10.0874 9.92884 9.71114 9.51384 9.17739Z"
                      fill="url(#paint1_radial_1017_1367)"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_1017_1367"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(7.77677 15.0376) rotate(-179.751) scale(8.82346 14.4775)"
                    >
                      <stop offset="0.314" stopColor="#FF9800" />
                      <stop offset="0.662" stopColor="#FF6D00" />
                      <stop offset="0.972" stopColor="#F44336" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_1017_1367"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(8.27258 6.25719) rotate(90.5787) scale(9.23205 6.94781)"
                    >
                      <stop offset="0.214" stopColor="#FFF176" />
                      <stop offset="0.328" stopColor="#FFF27D" />
                      <stop offset="0.487" stopColor="#FFF48F" />
                      <stop offset="0.672" stopColor="#FFF7AD" />
                      <stop offset="0.793" stopColor="#FFF9C4" />
                      <stop
                        offset="0.822"
                        stopColor="#FFF8BD"
                        stopOpacity="0.804"
                      />
                      <stop
                        offset="0.863"
                        stopColor="#FFF6AB"
                        stopOpacity="0.529"
                      />
                      <stop
                        offset="0.91"
                        stopColor="#FFF38D"
                        stopOpacity="0.209"
                      />
                      <stop
                        offset="0.941"
                        stopColor="#FFF176"
                        stopOpacity="0"
                      />
                    </radialGradient>
                    <clipPath id="clip0_1017_1367">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                Hottest posts
              </h2>
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
                  <h3 className="text-[#6F6F6F] dark:text-gray-400 font-inter text-xs font-medium leading-4">
                    Cryptocurrencies. Trading
                  </h3>
                  <Ellipsis />
                </div>

                <h2 className="text-[#0F0F0F] dark:text-gray-200 font-inter text-base font-medium leading-6 mt-[9px]">
                  corporate job and travel the world
                </h2>
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
                  <h3 className="text-[#6F6F6F] dark:text-gray-400 font-inter text-xs font-medium leading-4">
                    Cryptocurrencies. Trading
                  </h3>
                  <Ellipsis />
                </div>

                <h2 className="text-[#0F0F0F] dark:text-gray-200 font-inter text-base font-medium leading-6 mt-[9px]">
                  corporate job and travel the world
                </h2>
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
                  <h3 className="text-[#6F6F6F] dark:text-gray-400 font-inter text-xs font-medium leading-4">
                    Cryptocurrencies. Trading
                  </h3>
                  <Ellipsis />
                </div>

                <h2 className="text-[#0F0F0F] dark:text-gray-200 font-inter text-base font-medium leading-6 mt-[9px]">
                  corporate job and travel the world
                </h2>
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
              <div className="flex justify-center items-center">
                <button className="text-[#0F0F0F] dark:text-gray-200 font-inter text-sm font-bold leading-[120%] mt-3 ">
                  Show all hottest post
                </button>
              </div>
            </div>
  )
}

export default HottestPosts