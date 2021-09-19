import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Contact from "./pages/contact_us";
import Review from "./pages/review_message";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import { News } from "./pages/news";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/review" exact component={Review} />
            <Route path="/news" exact component={News} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
