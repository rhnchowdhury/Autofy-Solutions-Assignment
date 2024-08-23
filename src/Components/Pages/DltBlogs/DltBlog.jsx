import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DltBlog = () => {
  const { id } = useParams();
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Button className="btn-danger" onClick={(e) => handleDelete(id)}>
        Delete
      </Button>
    </div>
  );
};

export default DltBlog;
