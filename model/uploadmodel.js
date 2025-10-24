import mongoose from "mongoose";


const uploadSchema = new mongoose.Schema({
    text: {
        type: String
    }
})

const UploadModel = mongoose.model("Upload", uploadSchema);

export default UploadModel;
