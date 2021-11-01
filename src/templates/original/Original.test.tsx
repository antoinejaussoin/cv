import ReactDOM from "react-dom";
import App from "./Original";
import cv from "../../data/en";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App cv={cv} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
