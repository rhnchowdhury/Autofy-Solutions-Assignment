import { Link } from "react-router-dom";
import image from "../../assets/raihan.png";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="d-flex">
        <img src={image} alt="" className="shadow rounded" />
        <div className="" style={{ marginLeft: "200px", marginTop: "200px" }}>
          <h1 className="fs-1 fw-bold">About Me!</h1>
          <p className="fs-5">
            I'm a{" "}
            <span className="fw-semibold" style={{ color: "#226B87" }}>
              Front-end developer
            </span>{" "}
            with a background in computer science and engineering. Recently, I
            graduated from the National University on CSE. I am passionate about
            coding and solving problems through code, and I am excited to work
            alongside other amazing programmers and learn so much more. My
            expertise includes Javascript, React, Express, Node.js,Firebase Auth
            and MongoDB.
          </p>
          <button className="btn " style={{ backgroundColor: "#FE6F00" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
