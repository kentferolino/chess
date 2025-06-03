import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "../components/Home";
import GrandmastersPage from "./GrandmastersPage";
import GrandmasterDetailPage from "./GrandmasterDetailPage";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/grandmasters" element={<GrandmastersPage />} />
      <Route
        path="/grandmasters/:username"
        element={<GrandmasterDetailPage />}
      />
    </ReactRouterRoutes>
  );
};

export default Routes;
