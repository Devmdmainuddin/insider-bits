import { errorResponse } from '@/app/api/helpers';
import { NextRequest } from 'next/server';
import { onDeleteBlog, onFindBlog, onUpdateBlog } from '../controllers';
import { IBlog } from '../validations';

type TParams = { params: { id: string } };

export const GET = async (req: NextRequest, { params: { id } }: TParams) => {
    try {
        const result = await onFindBlog(id);
        return result;
    } catch (err) {
        return errorResponse('Internal server error');
        console.log(err);
    }
};

export const PATCH = async (req: NextRequest, { params: { id } }: TParams) => {
    try {
        const result = await onFindBlog(id);
        if (!result) {
            return errorResponse('ID is required');
        }

        const body = (await req.json()) as Partial<IBlog>;

        const res = await onUpdateBlog(id, body);
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
        console.log(err);
    }
};

export const DELETE = async (req: NextRequest, { params: { id } }: TParams) => {
    try {
        if (!id) {
            return errorResponse('ID is required');
        }

        const res = await onDeleteBlog(id);
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
        console.log(err);
    }
};
