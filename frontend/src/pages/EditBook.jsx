import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Added success state
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5151/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while fetching the book details.");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      setError("Please fill out all fields.");
      return;
    }

    const year = parseInt(publishYear, 10);
    if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
      setError("Please enter a valid publish year.");
      return;
    }

    const data = {
      title,
      author,
      publish: year,
    };

    setLoading(true);
    setError("");
    setSuccess(""); // Clear previous success messages
    axios
      .put(`http://localhost:5151/books/${id}`, data)
      .then(() => {
        setLoading(false);
        setSuccess("Book details updated successfully!"); // Set success message
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error details:", error.response || error.message || error);
        setError("An error occurred while updating the book. Please try again later.");
      });
  };

  return (
    <Container className="p-4">
      <BackButton />
      <h1 className="my-4">Edit Book</h1>
      {loading && <Spinner />}
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>} {/* Success display */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="border border-primary rounded p-4">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Publish Year</Form.Label>
                <Form.Control
                  type="number"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                />
              </Form.Group>

              <Button 
                variant="primary" 
                onClick={handleEditBook} 
                disabled={loading}
              >
                Save
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditBook;
