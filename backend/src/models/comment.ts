import { model, InferSchemaType, Schema } from "mongoose";

const commentSchema = new Schema({
    comment: {type:String, required:true, trim:true}
})

type Comment = InferSchemaType <typeof commentSchema>

export default model<Comment>("Comment", commentSchema)