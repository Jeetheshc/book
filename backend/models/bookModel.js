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
        type: Number, // Change this to Number to store just the year
        required: true
    }
}, {
    timestamps: true
});

// Export the Book model
export const Book = mongoose.model("Book", bookSchema);
