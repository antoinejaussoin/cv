import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modern from "./templates/modern/Modern";
// import Original from "./templates/original/Original";
import cv from "./data/en";

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/modern">
          <Modern cv={cv} />
        </Route> */}
        <Route path="/" exact>
          <Modern cv={cv} />
        </Route>
      </Switch>
    </Router>
  );
}
