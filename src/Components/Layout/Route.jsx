import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blogs/Blog";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import UpdateBlog from "../Pages/Blogs/UpdateBlog";
// import CreateBlog from "../Pages/AddBlog/CreateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // {
      //   path: "/create",
      //   element: <CreateBlog></CreateBlog>,
      // },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/blog/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateBlog></UpdateBlog>,
      },
    ],
  },
]);
export default router;
