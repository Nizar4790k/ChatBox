

import { useHistory } from "react-router-dom";
import "./Login.css";


const Login = () => {

    

const history = useHistory();

   const authenticate = () =>{


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username==="Nizar" && password==="123"){
        alert("Success")
        history.push("ChatBox")
    }else{
        alert("Bad credentials")
    }
    
    
    }


    return (

        
        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Welcome to ChatBox!</h1>
                <h4 >Please login</h4>
                <input type="text" id="username" className="form-control" name="username" placeholder="Username" required="" autoFocus="" maxLength="10" />
                <br></br>
                
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                
                <br></br>
                <button className="btn btn-lg btn-primary btn-block" onClick={authenticate}>Login</button>
                
                <br></br>
                <br></br>
                
                <button type="button" className="btn btn-link" onClick={()=>{history.push("/Register")}}>Register</button>
            </div>
            

        </div>





    );



};



export default Login;