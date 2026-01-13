import RouteController from "./RouteController";
import { Route } from "react-router-dom";

// Pages
import Home from "../../components/pages/Home";

// Images
import HomeImg from "../../assets/home.png";


export const routes = [
  // "/" => show header image
  <Route
    key="dashboard"
    path="/"
    element={RouteController(<Home />, {
      showImage: true,
      image: HomeImg,
    })}
  />,

  // Other pages (no manual breadcrumb)
  <Route
    key="home"
    path="/home"
    element={RouteController(<Home />)}
  />,
 

  <Route key="404" path="*" element={<h2>Page Not Found</h2>} />,
];
