import { Button, Card } from "react-bootstrap";

const BlogMid = ({ val }) => {
  const { title, type, content, status } = val;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content.slice(0, 100) + "..."}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogMid;
