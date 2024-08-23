import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [select, setSelect] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, select, desc, status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/blog");
        e.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1
          className="fw-bold fs-1 py-5 text-center"
          style={{ color: "#226B87" }}>
          Add a Blog Post
        </h1>
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3 w-25">
            <Form.Control
              type="text"
              placeholder="Enter Blog Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Select
            className="mb-3 w-25"
            aria-label="Default select "
            value={select}
            onChange={(e) => setSelect(e.target.value)}>
            <option>type</option>
            <option value="blog">blog</option>
            <option value="page">page</option>
          </Form.Select>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Select
            className="mb-3 w-25"
            aria-label="Default select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option>status</option>
            <option value="published">published</option>
            <option value="draft">draft</option>
          </Form.Select>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3 w-25">
            <Form.Control
              as="textarea"
              placeholder="Blog Description"
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
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateBlog;
