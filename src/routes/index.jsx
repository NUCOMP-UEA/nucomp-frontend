import {
  Routes as RoutesReactRouter,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Calculator from "../pages/Calculator";
import LayoutMain from "../pages/_layouts/main";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </RoutesReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
