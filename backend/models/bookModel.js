import mongoose from "mongoose";

// Define the schema for a book
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publish: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

// Export the Book model
export const Book = mongoose.model("Book", bookSchema);
