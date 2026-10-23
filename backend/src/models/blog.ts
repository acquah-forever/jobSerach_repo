import { model, InferSchemaType, Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {type: String, required: true, trim:true},
    body: {type: String, required: true, trim:true},
    like: {type: Number, required: true},
    comment: {type: String, required: true, trim:true}
},{timestamps:true});

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);