// import Express, { Router } from "express";
// const router = Express.Router();
// import { createBook,getAllBook } from "../controllers/bookControllers.js";

// router.post("/",createBook);
// router.get("/",getAllBook);
// export default router;
import Express from "express";
const router = Express.Router();
import { createBook, getAllBooks, updateBook, deleteBook, getOneBook } from "../controllers/bookControllers.js"; // Updated function name

router.post("/", createBook);
router.get("/", getAllBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/:id",getOneBook);

export default router;
