import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, desc }),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/blog");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-5">
      <Helmet>
        <title>Update</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <h1
          className="fw-bold fs-1 pb-4 text-center"
          style={{ color: "#226B87" }}>
          Update Blog Post
        </h1>
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3 w-25">
            <Form.Control
              type="text"
              placeholder="Update Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3 w-25">
            <Form.Control
              as="textarea"
              placeholder="Update Description"
              onChange={(e) => setDesc(e.target.value)}
              rows={5}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            className="w-25 fw-bold "
            style={{
              backgroundColor: "#226B87",
            }}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateBlog;
