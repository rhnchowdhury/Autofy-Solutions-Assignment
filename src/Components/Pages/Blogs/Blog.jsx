import { useEffect, useState } from "react";
import BlogMid from "./BlogMid";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blog")
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-5">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="row row-gap-3">
        {value.map((val) => (
          <BlogMid key={val.id} val={val}></BlogMid>
        ))}
      </div>
    </div>
  );
};

export default Blog;
