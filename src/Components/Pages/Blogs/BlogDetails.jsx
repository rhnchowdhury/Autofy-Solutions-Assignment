import { Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const allData = useLoaderData();
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
                <Button className="btn-danger">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
