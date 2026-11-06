import { model, InferSchemaType, Schema } from "mongoose";

const commentSchema = new Schema({
    blog: {type: Schema.Types.ObjectId, ref:"Blog", required:true},
    comment: {type:String, required:true}
},
{timestamps: true})

type Comment = InferSchemaType <typeof commentSchema>

export default model<Comment>("Comment", commentSchema)