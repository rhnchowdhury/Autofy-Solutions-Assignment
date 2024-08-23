import { Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import DltBlog from "../DltBlogs/DltBlog";

const BlogDetails = () => {
  const allData = useLoaderData();

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-5 d-flex justify-content-center">
      {allData.map((data) => (
        <div key={data.id}>
          <Helmet>
            <title>{`Blog-${data.title}`}</title>
          </Helmet>
          <Card style={{ width: "28rem" }}>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.content}</Card.Text>
              <div className="d-flex justify-content-between">
                <Link to={`/update/${data.id}`}>
                  <Button
                    style={{ backgroundColor: "#FE6F00", border: "none" }}>
                    Update
                  </Button>
                </Link>
                {/* <DltBlog></DltBlog> */}
                <Button
                  className="btn-danger"
                  onClick={(e) => handleDelete(data.id)}>
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
