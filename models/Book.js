import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: Number,
            required: true,
        },
        totalQuantity: {
            type: Number,
            required: true,
        },
        availableQuantity: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        collection: "book",
        timestamps: true,
    }
);

export default mongoose.model("Book", BookSchema);