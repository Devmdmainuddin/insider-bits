import { IBlog } from '../validations';
import { Model, Schema, model, models } from 'mongoose';

const BlogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    categories: { type: String, required: true },
    editorValue: { type: String }
});

const BlogModel =
    (models?.Blog as Model<Document & IBlog>) ?? model('Blog', BlogSchema);
export default BlogModel;
