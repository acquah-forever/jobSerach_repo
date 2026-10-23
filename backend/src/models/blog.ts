import { model, InferSchemaType, Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    like: {type: Number, required: true},
    comment: {type: String, required: true}
});

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);