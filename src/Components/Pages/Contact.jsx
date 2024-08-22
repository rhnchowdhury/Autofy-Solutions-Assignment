import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="mb-5" style={{ marginLeft: "100px", paddingTop: "50px" }}>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1 className="fs-1 fw-bold">Get in Touch</h1>
      <div className="mt-5">
        <div className="mb-4">
          <label className="form-label fw-bold">Name</label>
          <input
            type="email"
            className="form-control w-50"
            required
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold">Email address</label>
          <input
            type="email"
            required
            className="form-control w-50"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold">Your Message</label>
          <textarea
            className="form-control w-50"
            required
            placeholder="Message"
            rows="6"></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn text-white fw-bold w-50"
          style={{ backgroundColor: "#226B87" }}
        />
      </div>
    </div>
  );
};

export default Contact;
