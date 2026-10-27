import { model, InferSchemaType, Schema } from 'mongoose';

const blogSchema = new Schema({
    imageUrl: {type: String, required: true},
    section: {type: String, required: true, trim:true},
    title: {type: String, required: true, trim:true},
    blurb: {type: String, required: true, trim:true},
    body1: {type: String, required: true, trim:true},
    body2: {type: String, required: true, trim:true},
    body3: {type: String, required: true, trim:true},
    body4: {type: String, required: true, trim:true},
    body5: {type: String, required: true, trim:true},
    body6: {type: String, required: true, trim:true},
},{timestamps:true});

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);