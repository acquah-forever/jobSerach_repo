import { model, Schema, InferSchemaType } from "mongoose";


const supportModelSchema = new Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type:String, required: true, trim: true},
    message: {type: String, required: true, trim: true}
})

type Support = InferSchemaType<typeof supportModelSchema>;

export default model <Support>("Support", supportModelSchema);