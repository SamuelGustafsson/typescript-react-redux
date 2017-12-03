import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>TJENNA</div>
  </Provider>,
  document.getElementById("root")
);
