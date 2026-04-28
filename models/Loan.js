import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            required: true,
        },
        loanDate: {
            type: Date,
            required: true,
        },
        expectedReturnDate: {
            type: Date,
            required: true,
        },
        returnDate: {
            type: Date,
            default: 0,
        },
        status: {
            type: String,
            enum: ["ativo", "devolvido", "atrasado"],
        },
        fine: {
            type: Number,
        },
    },
    {
        collection: "loan",
        timestamps: true,
    }
);

export default mongoose.model("Loan", LoanSchema);