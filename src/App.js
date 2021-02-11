import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Homepage } from "./containers/HomePage/Homepage";
import { UserPage } from "./containers/UserPage/UserPage";

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/user/:userId" exact component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
};
