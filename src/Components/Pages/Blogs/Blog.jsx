import { useEffect, useState } from "react";
import BlogMid from "./BlogMid";

const Blog = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-5">
      {value.map((val) => (
        <BlogMid key={val.id} val={val}></BlogMid>
      ))}
    </div>
  );
};

export default Blog;
