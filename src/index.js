import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import Contact from "./pages/contact_us";
import Review from "./pages/review_message";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
// import  News  from "./pages/news";
// import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/review" exact component={Review} />
        {/* <Route path="/news" exact component={News} /> */}
      </Switch>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
