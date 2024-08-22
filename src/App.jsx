// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Layout/Route";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
