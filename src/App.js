
import './App.css';
import Login from "./Login/Login"
import Register from "./Register/Register"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/Register" exact component={Register}></Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
