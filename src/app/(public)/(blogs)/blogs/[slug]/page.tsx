'use client';

import blogPosts from '@/app/(public)/httpActions/blogs/data';
import { BlogPost } from '@/app/(public)/httpActions/blogs/schemas';
import HottestPosts from '@/components/sidebar/HottestPosts';
import RelatedPosts from '@/components/sidebar/RelatedPosts';
import { MailPlus,} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';

// Placeholder for BlogRecommendedCard
const BlogRecommendedCard = () => (
    <div className="border rounded-lg p-4">
        <h3 className="font-bold text-lg">Recommended Post</h3>
        <p>This is a placeholder for a recommended blog post.</p>
    </div>
);

// Placeholder for formatPublicationDate
const formatPublicationDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Placeholder for getMinutesRead
const getMinutesRead = (readTime: string) => {
    return readTime;
};

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = use(params);
    // const { slug } = use(Promise.resolve(params));
   
    const blog: BlogPost | undefined = blogPosts.find(p => p.slug === slug);
console.log(blog);
    if (!blog) {
        return <p>Blog post not found.</p>;
    }

    return (
        <>
            <div className='container mx-auto'>
                <div className='md:grid grid-cols-6 gap-12 mb-[87px]'>
                    <section className='col-span-4'>
                        <div>
                            {blog ? (
                                <div>
                                    <div className='flex flex-wrap gap-3 items-center'>
                                        <Image
                                            src={blog.author.avatar}
                                            alt='author image'
                                            width={40}
                                            height={40}
                                            className='rounded-full w-10 h-10'
                                        />
                                        <div>
                                            <h3 className='author text-[#0F0F0F] dark:text-gray-200 font-inter text-base font-medium leading-6'>
                                                <Link href='#'>
                                                    {blog.author.name}
                                                </Link>
                                            </h3>
                                            <span className='text-[#878787] dark:text-gray-400 font-inter text-[12px] font-medium '>
                                                FBA Researcher
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between flex-wrap mt-4'>
                                        <div className='flex items-center gap-2.5 text-[#6F6F6F] dark:text-gray-400 font-inter text-xs font-medium leading-4'>
                                            <span>
                                                {formatPublicationDate(
                                                    blog.publishedAt
                                                )}
                                            </span>
                                            <span className='rounded-full bg-[#D9D9D9] dark:text-gray-400 w-[5px] h-[5px]'></span>
                                            <span>
                                                {getMinutesRead(
                                                    blog.readTime
                                                )}
                                            </span>
                                            <span className='rounded-full bg-[#D9D9D9] w-[5px] h-[5px]'></span>
                                            <span className='flex gap-2 dark:text-gray-400'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='10'
                                                    height='14'
                                                    viewBox='0 0 10 14'
                                                    fill='none'
                                                >
                                                    <path
                                                        d='M2.84418 13.4997C2.74699 13.4997 2.65011 13.4751 2.56855 13.4271C2.49781 13.3853 2.44285 13.3283 2.40988 13.2625C2.37692 13.1967 2.36725 13.1247 2.38199 13.0546L2.80574 11.0472L1.01074 9.62563C0.882925 9.52432 0.836988 9.37299 0.891988 9.23512C0.946988 9.09725 1.09386 8.9967 1.27043 8.97588L3.75105 8.68313L4.86043 6.85678C4.89914 6.79307 4.95902 6.73943 5.0333 6.70192C5.10758 6.66441 5.19328 6.64453 5.28074 6.64453C5.36819 6.64453 5.4539 6.66441 5.52818 6.70192C5.60245 6.73943 5.66233 6.79307 5.70105 6.85678L6.81043 8.68313L9.29105 8.97588C9.37761 8.98613 9.45891 9.01583 9.52578 9.06164C9.59266 9.10745 9.64243 9.16754 9.66949 9.23512C9.72449 9.37299 9.67855 9.52432 9.55074 9.62563L7.75574 11.0472L8.17949 13.0546C8.2098 13.1976 8.1373 13.3418 7.99293 13.4271C7.84855 13.5124 7.6573 13.5236 7.49918 13.4561L5.28043 12.5082L3.06168 13.4561C2.99464 13.4848 2.91997 13.4998 2.84418 13.4997Z'
                                                        fill='#FFE278'
                                                    />
                                                    <path
                                                        d='M6.81091 8.6829L5.70153 6.85655C5.66282 6.79284 5.60294 6.73919 5.52866 6.70168C5.45439 6.66417 5.36867 6.64429 5.28122 6.64429V10.3881L6.81216 8.68315L6.81091 8.6829Z'
                                                        fill='#FFB454'
                                                    />
                                                    <path
                                                        d='M8.09372 0.5H6.37497L5.28122 0.90625L4.18747 0.5H2.46872C2.20997 0.5 1.99997 0.670625 1.99997 0.880859V3.72461C1.99997 3.84217 2.06684 3.95312 2.18091 4.02523L4.18747 5.29324H6.37497L8.38153 4.02523C8.49559 3.95312 8.56247 3.84217 8.56247 3.72461V0.880859C8.56247 0.670625 8.35247 0.5 8.09372 0.5Z'
                                                        fill='#FF8659'
                                                    />
                                                    <path
                                                        d='M8.09372 0.5H6.37497L5.28122 0.90625V5.29324H6.37497L8.38153 4.02523C8.49559 3.95312 8.56247 3.84217 8.56247 3.72461V0.880859C8.56247 0.670625 8.35247 0.5 8.09372 0.5Z'
                                                        fill='#FF1F3D'
                                                    />
                                                    <path
                                                        d='M4.18747 0.5V5.29324L4.99341 5.80258C5.07809 5.85615 5.17966 5.88281 5.28122 5.88281C5.38278 5.88281 5.48434 5.85615 5.56903 5.80258L6.37497 5.29324V0.5H4.18747Z'
                                                        fill='#FFF5F5'
                                                    />
                                                    <path
                                                        d='M5.28122 0.5V5.88281C5.38278 5.88281 5.48434 5.85615 5.56903 5.80258L6.37497 5.29324V0.5H5.28122Z'
                                                        fill='#E2DFF4'
                                                    />
                                                    <path
                                                        d='M5.28122 7.40625C4.50591 7.40625 3.87497 6.89361 3.87497 6.26367C3.87497 5.63373 4.50591 5.12109 5.28122 5.12109C6.05653 5.12109 6.68747 5.63373 6.68747 6.26367C6.68747 6.89361 6.05653 7.40625 5.28122 7.40625Z'
                                                        fill='#FFB454'
                                                    />
                                                    <path
                                                        d='M5.28122 5.12109V7.40625C6.05653 7.40625 6.68747 6.89361 6.68747 6.26367C6.68747 5.63373 6.05653 5.12109 5.28122 5.12109Z'
                                                        fill='#FF7D47'
                                                    />
                                                    <path
                                                        d='M3.75001 8.68311L1.27063 8.97586C1.10095 8.99592 0.959384 9.08936 0.899384 9.21885L5.28095 10.3881L3.75001 8.68311ZM2.80532 11.0485L2.38188 13.0544C2.36748 13.1226 2.37629 13.1927 2.40735 13.2572C2.43841 13.3217 2.49055 13.3781 2.55813 13.4202L5.28095 10.3881L2.80532 11.0485ZM5.28095 10.3881V12.5082L7.4997 13.456C7.56698 13.4847 7.64183 13.4997 7.71782 13.4997C7.81501 13.4997 7.91188 13.4751 7.99345 13.4271C7.99688 13.4251 8.00032 13.4228 8.00376 13.4205L5.28095 10.3881ZM9.66251 9.21885L5.28095 10.3881L7.75657 11.0487L7.75626 11.0472L9.55126 9.6256C9.67907 9.5243 9.72501 9.37297 9.67001 9.2351C9.66751 9.22951 9.66501 9.22418 9.66251 9.21885Z'
                                                        fill='#FFB454'
                                                    />
                                                </svg>
                                                Members only{' '}
                                            </span>
                                            <span className='rounded-full bg-[#D9D9D9] w-[5px] h-[5px]'></span>
                                            <span className='flex gap-2'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='15'
                                                    height='14'
                                                    viewBox='0 0 15 14'
                                                    fill='none'
                                                >
                                                    <circle
                                                        cx='7.69287'
                                                        cy='7'
                                                        r='7'
                                                        fill='#0049FF'
                                                    />
                                                    <path
                                                        d='M10.8041 6.48646L6.42906 3.89999C6.07359 3.68994 5.52921 3.89378 5.52921 4.41331V9.58501C5.52921 10.0511 6.03506 10.332 6.42906 10.0983L10.8041 7.5131C11.1943 7.28316 11.1956 6.7164 10.8041 6.48646Z'
                                                        fill='white'
                                                    />
                                                </svg>{' '}
                                                Listen
                                            </span>
                                        </div>
                                        <div className='flex gap-5 items-center mt-4 md:mt-0'>
                                            <span className='dark:text-gray-400'>
                                                {' '}
                                                <Link href='#'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='21'
                                                        height='16'
                                                        viewBox='0 0 21 16'
                                                        fill='none'
                                                    >
                                                        <path
                                                            d='M18.3385 3.98749C18.351 4.16248 18.351 4.33751 18.351 4.5125C18.351 9.84997 14.2885 16 6.86347 16C4.57595 16 2.45097 15.3375 0.66346 14.1875C0.988472 14.225 1.30094 14.2375 1.63846 14.2375C3.52593 14.2375 5.26345 13.6 6.65096 12.5125C4.87596 12.475 3.38845 11.3125 2.87594 9.7125C3.12596 9.74997 3.37595 9.77498 3.63847 9.77498C4.00096 9.77498 4.36349 9.72496 4.70096 9.63751C2.85097 9.26247 1.46343 7.63749 1.46343 5.67499V5.62501C2.00091 5.92501 2.62596 6.11251 3.28841 6.13748C2.20091 5.41247 1.48844 4.17498 1.48844 2.77497C1.48844 2.02499 1.6884 1.33749 2.03842 0.737481C4.02593 3.18748 7.01345 4.78745 10.3634 4.96248C10.3009 4.66248 10.2634 4.35001 10.2634 4.03751C10.2634 1.81248 12.0634 0 14.3009 0C15.4634 0 16.5134 0.487499 17.2509 1.275C18.1634 1.10001 19.0384 0.762491 19.8134 0.300002C19.5134 1.23752 18.8759 2.02502 18.0384 2.52499C18.8509 2.43753 19.6384 2.21248 20.3634 1.90001C19.8135 2.69998 19.126 3.41245 18.3385 3.98749Z'
                                                            fill='#282828'
                                                        />
                                                    </svg>{' '}
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href='#'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='9'
                                                        height='16'
                                                        viewBox='0 0 9 16'
                                                        fill='none'
                                                    >
                                                        <path
                                                            d='M8.37122 9L8.81559 6.10437H6.03715V4.22531C6.03715 3.43313 6.42528 2.66094 7.66965 2.66094H8.93278V0.195625C8.93278 0.195625 7.78653 0 6.69059 0C4.40247 0 2.90684 1.38688 2.90684 3.8975V6.10437H0.363403V9H2.90684V16H6.03715V9H8.37122Z'
                                                            fill='#3F3F3F'
                                                        />
                                                    </svg>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href='#'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='17'
                                                        height='16'
                                                        viewBox='0 0 17 16'
                                                        fill='none'
                                                    >
                                                        <path
                                                            d='M4.51429 16H1.19708V5.31762H4.51429V16ZM2.8539 3.86044C1.79316 3.86044 0.932785 2.98185 0.932785 1.92111C0.932785 1.4116 1.13519 0.92296 1.49547 0.562681C1.85575 0.202403 2.34439 0 2.8539 0C3.36341 0 3.85205 0.202403 4.21233 0.562681C4.57261 0.92296 4.77501 1.4116 4.77501 1.92111C4.77501 2.98185 3.91428 3.86044 2.8539 3.86044ZM16.9296 16H13.6195V10.7999C13.6195 9.56057 13.5945 7.97125 11.8948 7.97125C10.1701 7.97125 9.90584 9.31771 9.90584 10.7106V16H6.5922V5.31762H9.7737V6.77479H9.82013C10.263 5.93549 11.3448 5.04976 12.9588 5.04976C16.316 5.04976 16.9331 7.26052 16.9331 10.132V16H16.9296Z'
                                                            fill='#3F3F3F'
                                                        />
                                                    </svg>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href='#'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='20'
                                                        height='16'
                                                        viewBox='0 0 20 16'
                                                        fill='none'
                                                    >
                                                        <path
                                                            d='M18.9221 5.63699L12.6362 0.208961C12.086 -0.266217 11.2188 0.119532 11.2188 0.857674V3.71671C5.48209 3.78238 0.933136 4.93213 0.933136 10.3688C0.933136 12.5631 2.34674 14.7369 3.90931 15.8735C4.39692 16.2282 5.09184 15.783 4.91206 15.2081C3.29263 10.0291 5.68017 8.65413 11.2188 8.57445V11.7143C11.2188 12.4536 12.0867 12.8376 12.6362 12.363L18.9221 6.93442C19.3175 6.59292 19.318 5.97895 18.9221 5.63699Z'
                                                            fill='#3F3F3F'
                                                        />
                                                    </svg>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className='text-[rgb(39,39,39)] dark:text-gray-200 font-inter text-2xl font-bold leading-10 mt-10'>
                                        {blog.title}
                                    </h2>
                                    <Image
                                        src={blog.featuredImage}
                                        alt='author image'
                                        width={831}
                                        height={503}
                                        className=' mt-[22px]'
                                    />
                                    <p className='text-[rgb(39,39,39)] dark:text-gray-50 font-inter text-base font-normal leading-6 mt-6'>
                                        {blog.content}
                                    </p>
                                    <h2 className='text-[rgb(15,15,15)] dark:text-gray-200 font-inter text-2xl font-extrabold leading-10'>
                                        So who is the path then?
                                    </h2>
                                    <p className='text-[rgb(39,39,39)] dark:text-gray-400 font-inter text-base font-normal leading-6 mt-6'>
                                        {blog.content}
                                    </p>
                                    <p className='text-[rgb(39,39,39)] dark:text-gray-400 font-inter text-base font-normal leading-6 mt-2.5'>
                                        {blog.content}
                                    </p>
                                    <div className='flex justify-center items-center flex-col mt-4'>
                                        <span className='w-10 h-9'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='41'
                                                height='36'
                                                viewBox='0 0 41 36'
                                                fill='none'
                                            >
                                                <path
                                                    d='M17.4342 2.84197C10.5276 7.2628 7.07509 12.5906 7.07509 18.8184C7.07509 20.7569 7.41367 21.7253 8.08733 21.7253L8.78203 21.5375C9.32937 21.327 9.7697 21.2218 10.1083 21.2218C12.0854 21.2218 13.7397 21.941 15.0642 23.3796C16.3904 24.8181 17.0536 26.5899 17.0536 28.7056C17.0536 30.7353 16.3343 32.4598 14.9045 33.8755C13.473 35.2913 11.7468 35.9982 9.72584 35.9982C6.90493 35.9982 4.57697 34.8404 2.74373 32.5195C0.913991 30.2038 0 27.2917 0 23.7883C0 19.8236 0.775401 16.1975 2.33322 12.9064C3.89455 9.61707 6.26987 6.64354 9.46971 3.98577C12.6696 1.32976 14.7116 0 15.5957 0C16.1852 0 16.6694 0.284197 17.0483 0.85259C17.4272 1.41923 17.6167 1.91394 17.6167 2.33497L17.429 2.84021L17.4342 2.84197ZM40.17 2.84197C33.2633 7.2628 29.8126 12.5889 29.8126 18.8201C29.8126 20.7586 30.1512 21.727 30.8248 21.727L31.5195 21.5393C32.0669 21.3288 32.5072 21.2235 32.8458 21.2235C34.7808 21.2235 36.4245 21.9428 37.7701 23.3813C39.1209 24.8198 39.791 26.5917 39.791 28.7074C39.791 30.7371 39.0718 32.4616 37.642 33.8773C36.2105 35.293 34.4843 36 32.4633 36C29.6424 36 27.3145 34.8422 25.4812 32.5212C23.6515 30.2055 22.7375 27.2934 22.7375 23.7901C22.7375 19.7832 23.5234 16.1238 25.1058 12.8152C26.6847 9.5048 29.0617 6.54003 32.2405 3.92613C35.4246 1.31046 37.4543 0.00175501 38.3367 0.00175501C38.9279 0.00175501 39.4121 0.285951 39.7928 0.854344C40.17 1.42274 40.3594 1.91745 40.3594 2.33848L40.17 2.84197Z'
                                                    fill='#852C8C'
                                                />
                                            </svg>
                                        </span>
                                        <h2 className='max-w-[470px] mx-auto text-[rgb(15,15,15)] dark:text-gray-100 font-inter text-xl font-extrabold leading-[36px] text-center mt-4'>
                                            If you set your goals ridiculously
                                            high and it&apos;s a failure, you
                                            will fail above everyone else&apos;s
                                            success.
                                        </h2>
                                    </div>
                                   
                                    <p className='text-[rgb(39,39,39)] dark:text-gray-200 font-inter text-base font-normal leading-6 mt-6'>
                                        {blog.content}
                                    </p>
                                    <p className='text-[rgb(39,39,39)] dark:text-gray-200 font-inter text-base font-normal leading-6 mt-1'>
                                        {blog.content}
                                    </p>
                                    <ul className='flex gap-3  items-center flex-wrap mt-8'>
                                        {blog.tags.map((tag, idx) => (
                                            <li
                                                key={idx}
                                                className='rounded-[17px] bg-[#F3F3F3] text-[#0F0F0F] py-[6px] px-5 font-inter text-base font-normal leading-6'
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                
                                    <div className='mt-[31px]'>
                                        <div className='relative w-[145px]'>
                                            <Image
                                                src={blog.author.avatar}
                                                alt='author image'
                                                width={73}
                                                height={73}
                                                className='rounded-full w-[73px] h-[73px]'
                                            />

                                        </div>
                                        <h2 className='text-[#0F0F0F] dark:text-gray-50 font-inter text-base font-medium leading-6 mt-5'>
                                            Written by {blog.author.name}
                                        </h2>
                                        <div className='flex justify-between items-center mt-2 flex-wrap gap-y-2'>
                                            <div className='flex gap-3 items-center '>
                                                <p className='text-[#0F0F0F] dark:text-gray-50 font-inter text-sm font-normal leading-5'>
                                                    <span>2.8K</span> Followers
                                                </p>
                                                <span className='w-1 h-1 rounded-full bg-[#d4d3d3] '></span>
                                                <p className='font-inter text-sm font-normal leading-5 text-[#0F0F0F] dark:text-gray-200'>
                                                    <span className='text-[#6F6F6F] dark:text-gray-200'>
                                                        Editor for 
                                                    </span>
                                                    ZORIK Blogs
                                                </p>
                                            </div>
                                            <div className='flex gap-3 '>
                                                <button className='py-2 px-4 bg-black text-white font-inter text-xs font-bold leading-4 rounded-full'>
                                                    Follow
                                                </button>
                                                <button className='p-2.5 bg-black text-white rounded-full'>
                                                    <MailPlus />
                                                </button>
                                            </div>
                                        </div>

                                        <p className='text-[#0F0F0F] dark:text-gray-300 font-inter text-base font-normal leading-6 mt-9'>
                                            Jon Gluck is the Editorial Director
                                            of Special Projects at Nexlore,
                                            Previously she held senior editorial
                                            positions at New York Magazine,
                                            Vogue and Hearst.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}

                            <hr className='bg-[#6F6F6F] my-[51px] h-[1px]' />
                            <h2 className='text-[#0F0F0F] dark:text-gray-200 font-inter text-xl font-bold leading-8 '>
                                More from {blog?.author.name} and {blog?.category}{' '}
                                Blog
                            </h2>
                            <div className='mt-9 grid grid-cols-1 md:grid-cols-2 gap-[22px]'>
                                <BlogRecommendedCard /> <BlogRecommendedCard />
                            </div>
                            <hr className='bg-[#6F6F6F] my-[51px] h-[1px]' />
                            <div className='flex gap-9 items-center'>
                                <button className='text-[#0F0F0F] bg-white dark:text-gray-800 font-inter text-xs font-medium p-3 border border-[#0F0F0F] leading-4 rounded-full'>
                                    See all from Jon Gluck
                                </button>
                                <button className='text-[#0F0F0F] bg-white dark:text-gray-800 font-inter text-xs font-medium p-3 border border-[#0F0F0F] leading-4 rounded-full'>
                                    See all from The ZORIK Blogs
                                </button>
                            </div>
                            <h2 className='text-[#0F0F0F] dark:text-gray-200 font-inter text-xl font-bold leading-9 mt-[42px]'>
                                Recommended For ZORIK
                            </h2>
                            <div className='mt-9 grid grid-cols-1 md:grid-cols-2 gap-[22px]'>
                                <BlogRecommendedCard /> <BlogRecommendedCard />
                            </div>
                        </div>
                    </section>
                    <aside className='hidden md:block col-span-2 '>
                        <RelatedPosts/>
                        <HottestPosts/>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default Page;

