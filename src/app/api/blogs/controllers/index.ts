import {
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';

import { blogSchema, IBlog, updateBlogSchema } from '../validations';
import BlogModel from '../models/index';
import { dbConnect } from '../../helpers/dbConn';

export const onCreateBlog = async (payload: IBlog) => {
    try {
        const { error } = blogSchema.safeParse(payload);
        if (error) return zodErrorResponse(error, 400);

        await dbConnect();

        const blog = (await BlogModel.create({
            ...payload
        })) as IBlog;

        return successResponse(blog);
    } catch (error) {
        return errorResponse('Internal server error');
    }
};

export const onFindBlog = async (_id: string) => {
    try {
        await dbConnect();
        const blog = (await BlogModel.findOne({
            _id
        })) as IBlog;

        return successResponse(blog);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onBlogs = async () => {
    try {
        await dbConnect();
        const blog = await BlogModel.find({});
        return successResponse(blog);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateBlog = async (_id: string, payload: Partial<IBlog>) => {
    try {
        const existingBlog = (await BlogModel.findOne({
            _id
        })) as IBlog;
        if (!existingBlog) {
            return errorResponse('Feedback not found', 404);
        }
        const { error } = updateBlogSchema.safeParse(payload);
        if (error) return zodErrorResponse(error, 400);

        await dbConnect();

        const blog = (await BlogModel.findOneAndUpdate(
            { _id },
            { $set: payload },
            {
                new: true
            }
        )) as IBlog;
        return successResponse(blog);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteBlog = async (_id: string) => {
    try {
        await dbConnect();

        const blog = (await BlogModel.findByIdAndDelete({
            _id
        })) as IBlog;
        if (!blog) {
            return errorResponse('Blog not found', 404);
        }

        return successResponse('Blog deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Blog');
    }
};
