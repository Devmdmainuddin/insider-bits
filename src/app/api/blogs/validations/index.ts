import { z } from 'zod';

export const blogSchema = z.object({
    title: z.string().nonempty('Title is required'),
    slug: z.string(),
    content: z.string().nonempty('Description is required'),
    tags: z.union([z.array(z.string()), z.string()]),
    categories: z.string().nonempty('Category is required'),
    editorValue: z.string().optional()
});
export const updateBlogSchema = blogSchema.partial();
export type IBlog = z.infer<typeof blogSchema>;
