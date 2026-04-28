import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        telephone: {
            type: String,
            required: true,
            trim: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        collection: "user",
        timestamps: true,
    }
);

export default mongoose.model("User", UserSchema);
