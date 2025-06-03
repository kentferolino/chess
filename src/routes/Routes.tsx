import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "../components/Home";
import GrandmastersPage from "./GrandmastersPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/grandmasters" element={<GrandmastersPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
