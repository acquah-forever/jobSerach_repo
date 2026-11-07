import { model, InferSchemaType, Schema } from 'mongoose';

const blogSchema = new Schema({
    section: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    blurb: { type: String, required: true, trim: true },
    body: [{ type: String, required: true, trim: true }]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

blogSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'blog'
});

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);