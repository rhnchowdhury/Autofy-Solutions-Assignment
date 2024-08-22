import { Helmet } from "react-helmet-async";
import HomeInfo from "./HomeInfo";

const Home = () => {
  return (
    <div className="m-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="fw-bold fs-1">
        Hi, <br /> I'm Md. <span style={{ color: "#226B87" }}>Rhihan</span>
      </h1>
      <p className="fw-semibold fs-3 mt-1">
        Welcome to <span style={{ color: "#226B87" }}>my Portfolio</span>
      </p>
      <HomeInfo></HomeInfo>
    </div>
  );
};

export default Home;
