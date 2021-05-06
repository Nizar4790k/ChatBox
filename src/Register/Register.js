// import axios from 'axios';
import React, { useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import "./Register.css";


const Login = () => {

    const [username,setUser]=useState(null);
    const [password,setPassword] = useState(null);

    const history = useHistory();

   const authenticate = () =>{


    setUser(document.getElementById("username").value);
    setPassword(document.getElementById("password").value);

    if (username==="Nizar" && password==="123"){
        alert("Success")
    }else{
        alert("Bad credentials")
    }
    
        
    /*
   

        let regex = new RegExp("[A-Za-z0-9_]");

        
        axios.post("http://localhost:4000/login",{username,password})
        .then(response=>{

            if(response.data.success){
                history.push("/ItemList");
            }else{
                alert("User and password may be not correct");
                attemps++;
                alert("Attemps to Log In remainings"+(3-attemps));
            }


        });
    */
    
    }


    return (

        
        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Welcome to ChatBox!</h1>
                <h4 >Please Register</h4>
                <input type="text" id="username" className="form-control" name="username" placeholder="Username" required="" autoFocus="" maxLength="10" />
                <br></br>
                
                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />
                
                <br></br>
                <button className="btn btn-lg btn-success btn-block" onClick={authenticate}>Register</button>
                
                <br></br>
                <br></br>
                <button type="button" class="btn btn-link" onClick={()=>{history.push("/")}}>Log in</button>
                
            </div>
            

        </div>





    );



};



export default Login;