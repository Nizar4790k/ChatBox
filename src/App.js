import './App.css';
import Login from "./Login/Login"
import Register from "./Register/Register"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatBox from "./ChatBox/ChatBox"
import { useState } from 'react';




function App() {
  
   const [userName,setUserName]=useState("")


    const onLoadUserName=(userName)=>{
    setUserName(userName)
   }

   

  return (
    <div className="App">
      <Router>
          
          <Switch>
          <Route path="/Login" component={()=><Login onLoadUserName={onLoadUserName}/>}></Route>
            <Route path="/Register" exact component={Register}></Route>
            <Route path="/ChatBox"  component={()=><ChatBox userName={userName}/>}></Route>
            <Route path="/" component={()=><Login onLoadUserName={onLoadUserName}/>}></Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
