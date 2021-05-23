import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Rocket from "./Pages/RocketDetail";
import PageNotFound from "./Pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SpaceX iOS Challenge</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/rocket/:id" exact component={Rocket} />
          <Route path="/errorPage" exact component={PageNotFound} />
          <Route path="*" exact component={PageNotFound} />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
