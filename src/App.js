import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Client1 from "./component/client/Client1";
import Client2 from "./component/client/Client2";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/client1'>
            <Client1 />
          </Route>
          <Route exact path='/client2'>
            <Client2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
