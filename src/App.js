
import './App.css';
import Login from "./Login/Login"
import Register from "./Register/Register"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatBox from "./ChatBox/ChatBox"

function App() {
  return (
    <div className="App">
      <Router>
          
          <Switch>
            <Route path="/Login" exact component={Login}></Route>
            <Route path="/Register" exact component={Register}></Route>
            <Route path="/ChatBox" exact component={ChatBox}></Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
