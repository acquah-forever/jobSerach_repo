import { model, Schema, InferSchemaType } from "mongoose";


const supportSchema = new Schema({
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type:String, required: true},
    message: {type: String, required: true, trim: true}
})

type Support = InferSchemaType<typeof supportSchema>;

export default model <Support>("Support", supportSchema);