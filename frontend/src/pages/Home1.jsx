/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS Bundle (optional, for components like modals, tooltips, etc.)

import axios from "axios";
import Spinner from "../components/spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";



const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log(error);
        setBooks([]);
        setLoading(false);
      });
  }, []);

  return (

    <div>
      <h1>Home</h1>
      <table class="table table-dark table-hover">
  <thead>
    <tr>
      <th>No</th>
      <th>Title</th>
      <th class="d-none d-md-table-cell">Author</th>
      <th class="d-none d-md-table-cell">Publish Year</th>
      <th class="d-md-none">Operations</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>



    </div>
    // <div className="p-4">
    //   <div className="flex justify-between items-center">
    //     <h1 className="text-3xl">Books List</h1>
    //     <Link to="/books/create">
    //       <MdOutlineAddBox className="text-sky-800 text-4xl" />
    //     </Link>
    //   </div>
    //   {loading ? (
    //     <Spinner />
    //   ) : (
    //     <table className="w-full border-separate border-spacing-2">
    //       <thead>
    //         <tr>
    //           <th className="border border-slate-600 rounded-md">No</th>
    //           <th className="border border-slate-600 rounded-md">Title</th>
    //           <th className="border border-slate-600 rounded-md max-md:hidden">
    //             Author
    //           </th>
    //           <th className="border border-slate-600 rounded-md max-md:hidden">
    //             Publish Year
    //           </th>
    //           <th className="border border-slate-600 rounded-md max-md">
    //             Operations
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {books.length > 0 ? (
    //           books.map((book, index) => (
    //             <tr key={book._id} className="h-8">
    //               <td className="border border-slate-700 rounded-md text-center">
    //                 {index + 1}
    //               </td>
    //               <td className="border border-slate-700 rounded-md text-center">
    //                 {book.title}
    //               </td>
    //               <td className="border border-slate-700 rounded-md text-center max-md:hidden">
    //                 {book.author}
    //               </td>
    //               <td className="border border-slate-700 rounded-md text-center max-md:hidden">
    //                 {book.publishYear}
    //               </td>
    //               <td className="border border-slate-700 rounded-md text-center">
    //                 <div className="flex justify-center gap-x-4">
    //                   <Link to={`/books/details/${book._id}`}>
    //                     <BsInfoCircle className="text-2xl text-green-800" />
    //                   </Link>
    //                   <Link to={`/books/edit/${book._id}`}>
    //                     <AiOutlineEdit className="text-2xl text-yellow-600" />
    //                   </Link>
    //                   <Link to={`/books/delete/${book._id}`}>
    //                     <MdOutlineDelete className="text-2xl text-red-600" />
    //                   </Link>
    //                 </div>
    //               </td>
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td
    //               colSpan="5"
    //               className="border border-slate-700 rounded-md text-center"
    //             >
    //               No books available
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
  );
};

export default Home;