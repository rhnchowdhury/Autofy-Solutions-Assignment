import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogMid = ({ val }) => {
  const { title, id, content } = val;
  return (
    <div className="col-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content.slice(0, 100) + "..."}</Card.Text>
          <Link to={`/blog/${id}`}>
            <Button style={{ backgroundColor: "#FE6F00", border: "none" }}>
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogMid;
