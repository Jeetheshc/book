import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you import Bootstrap CSS

function BackButton({ destination = "/" }) {
  return (
    <div className="d-flex">
      <Link
        to={destination}
        className="btn btn-primary d-inline-flex align-items-center"
      >
        <BsArrowLeft className="me-2" />
        Back
      </Link>
    </div>
  );
}

export default BackButton;
