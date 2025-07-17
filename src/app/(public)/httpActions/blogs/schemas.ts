import { z } from "zod";

const authorSchema = z.object({
  name: z.string(),
  avatar: z.string().url(),
  bio: z.string(),
});

const blogPostSchema = z.object({
  id: z.string(),
  slug:z.string(),
  title: z.string().min(10),
  content: z.string().min(100),
  author: authorSchema,
  publishedAt: z.string().regex(/^\d{1,2} [A-Za-z]{3}, \d{4}$/),
  readTime: z.string().regex(/^\d+ min read$/),
  views: z.string().regex(/^[\d.]+K?$/),
  likes: z.number().min(0),
  category: z.string(),
  tags: z.array(z.string()),
  featuredImage: z.string().url(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;
export type Author = z.infer<typeof authorSchema>;

export { blogPostSchema, authorSchema };