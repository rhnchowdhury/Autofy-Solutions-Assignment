import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const allData = useLoaderData();
  return (
    <div className="p-5">
      {allData.map((data) => (
        <div key={data.id}>
          <Card style={{ width: "28rem" }}>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.content}</Card.Text>
              <div className="d-flex justify-content-between">
                <Button style={{ backgroundColor: "#FE6F00", border: "none" }}>
                  Update
                </Button>
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
