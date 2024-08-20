import { Book } from '../models/bookModel.js'

// export const createBook = async (req, res) => {
//     try {
//         const { title, author, publish } = req.body;

//         if (!title || !author || !publish) {
//             return res.status(400).send({ message: "Please fill all fields" });
//         }

//         const year = new Date(publish).getFullYear(); // Extract only the year from the publish date
//         const newBook = { title, author, publish: year };
//         const book = await Book.create(newBook);

//         return res.status(201).send(book); // Return the newly created book with status 201
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).send({ message: "Internal server error" });
//     }
// }

export const createBook = async (req, res) => {
    try {
        const { title, author, publish } = req.body;

        if (!title || !author || !publish) {
            return res.status(400).send({ message: "Please fill all fields" });
        }

        // Validate if 'publish' is a valid year
        const year = parseInt(publish, 10);
        if (isNaN(year) || year.toString().length !== 4) {
            return res.status(400).send({ message: "Invalid publish year" });
        }

        const newBook = { title, author, publish: year };
        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send(books); // Return all books with status 200
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
}

// export const deleteBook = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const book = await Book.findById(id);
//         if (!book) {
//             return res.status(404).send({ message: "Book not found" });
//         }

//         await Book.findByIdAndDelete(id);
//         return res.status(200).send({ message: "Book deleted successfully" });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).send({ message: "Internal server error" });
//     }
// }
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Attempting to delete book with ID: ${id}`);

        const book = await Book.findById(id);
        if (!book) {
            console.log(`Book with ID ${id} not found`);
            return res.status(404).send({ message: "Book not found" });
        }

        await Book.findByIdAndDelete(id);
        console.log(`Book with ID ${id} deleted successfully`);
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error during deletion:", error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
};


export const getOneBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        return res.status(200).send(book); // Return the found book with status 200
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
}

export const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book updated successfully", book: result });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal server error" });
    }
}
