import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const Canned = () => (
  <div>
    <h1>Canned Foods</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/canned" component={Canned} />
      </Switch>
    </div>
  );
}

export default App;
