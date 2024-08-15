/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5151/books")
      .then((response) => {
        if (response.data) {
          setBooks(response.data);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch books. Please try again later.");
        console.log(error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="display-4 text-center text-primary my-4 py-3 ">
  Books List
</h1>

        <Link to="/books/create" className="btn btn-primary">
          <MdOutlineAddBox className="me-2" /> Add Book
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          <table className="table table-striped table-dark">
            <thead>
              <tr>
              <th className="d-none d-md-table-cell text-center">No</th>
                <th className="d-none d-md-table-cell text-center">Title</th>
                <th className="d-none d-md-table-cell text-center">Author</th>
                <th className="d-none d-md-table-cell text-center">Publish Year</th>
                <th className="d-none d-md-table-cell text-center">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{book.title}</td>
                    <td className="text-center d-none d-md-table-cell">{book.author}</td>
                    <td className="text-center d-none d-md-table-cell">{book.publish?.toString()}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <Link to={`/books/details/${book._id}`} className="text-success">
                          <BsInfoCircle className="fs-4" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`} className="text-warning">
                          <AiOutlineEdit className="fs-4" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} className="text-danger">
                          <MdOutlineDelete className="fs-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No books available</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Home;
