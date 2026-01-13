import { BrowserRouter as Router, Routes } from "react-router-dom";
// import AppHeader from "../components/templates/AppHeader";
import { routes } from "./Routes";

const AppNavigator = () => {
  return (
    <Router>
      {/* <AppHeader /> */}
      <Routes>{routes}</Routes>
    </Router>
  );
};

export default AppNavigator;
