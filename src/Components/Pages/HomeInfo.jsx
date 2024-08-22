import { Card, CardGroup } from "react-bootstrap";
import img1 from "../../assets/raincloud.png";
import img2 from "../../assets/khukumoni.png";
import img3 from "../../assets/ideabd.png";

const HomeInfo = () => {
  return (
    <div>
      <CardGroup className="mt-5">
        <Card className="col">
          <Card.Img variant="top" src={img1} height={"1200px"} />
          <Card.Body>
            <Card.Title>RainClod comms Ltd</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col">
          <Card.Img variant="top" src={img2} height={"1200px"} />
          <Card.Body>
            <Card.Title>Khukumoni Welfare Foundation</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col">
          <Card.Img variant="top" src={img3} height={"1200px"} />
          <Card.Body>
            <Card.Title>Idea Group Bd</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </CardGroup>
    </div>
  );
};

export default HomeInfo;
