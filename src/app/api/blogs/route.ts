import { NextRequest } from 'next/server';
import { errorResponse } from '@/app/api/helpers';
import { IBlog } from './validations/index';
import { onBlogs, onCreateBlog } from './controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IBlog;
        console.log(body);
        const res = await onCreateBlog(body);
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
        console.log(err);
    }
};

export const GET = async () => {
    try {
        const res = await onBlogs();
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
        console.log(err);
    }
};
