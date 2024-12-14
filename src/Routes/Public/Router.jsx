import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Home/Home";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import ServiceDetail from "../../components/Services/ServiceList/ServiceDetails";
import Update from "../../components/Update/Update";
import Contact from "../../components/Contacts/Contact";
import Login from "../Sign-In-Out/Login";
import Register from "../Sign-In-Out/Rejister";
import PrivateRoute from "../Private/PrivateRoute";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          // Load data for Home from services.json
          return fetch('/services.json').then(res => res.json());
        },
      },
      { path: "/about", element: <About /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => {
          // Load data for Services from services.json
          return fetch('/services.json').then(res => res.json());
        },
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetail /></PrivateRoute>,
        loader: ({ params }) => {
          // Load all services data and filter by ID
          return fetch('/services.json')
            .then(res => res.json())
            .then(services => services.find(service => service.id === params.id));
        },
      },
      { path: "/update", element: <Update /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
    ],
  },
]);

export default router;
