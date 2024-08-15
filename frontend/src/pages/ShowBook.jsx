// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import BackButton from "../components/BackButton";
// import Spinner from "../components/spinner";
// const ShowBook = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5151/books/${id}`)
//       .then((response) => {
//         setBook(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, [id]);

//   return (
//     <div className="container p-4">
//       <BackButton />
//       <h1 className="my-4">Show Book</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="border border-primary rounded p-4">
//           <div className="mb-3">
//             <span className="fw-bold me-2">Id:</span>
//             <span>{book._id}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold me-2">Title:</span>
//             <span>{book.title}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold me-2">Author:</span>
//             <span>{book.author}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold me-2">Publish Year:</span>
//             <span>{book.publishYear}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold me-2">Create Time:</span>
//             <span>{new Date(book.createdAt).toString()}</span>
//           </div>
//           <div className="mb-3">
//             <span className="fw-bold me-2">Last Update Time:</span>
//             <span>{new Date(book.updatedAt).toString()}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowBook;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5151/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container p-4">
      <BackButton />
      <h1 className="my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border border-primary rounded p-4">
          <div className="mb-3">
            <span className="fw-bold me-2">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold me-2">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold me-2">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold me-2">Publish Year:</span>
            <span>{book.publish}</span> {/* Corrected field name */}
          </div>
          <div className="mb-3">
            <span className="fw-bold me-2">Create Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="mb-3">
            <span className="fw-bold me-2">Last Update Time:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
