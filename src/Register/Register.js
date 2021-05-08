// import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import "./Register.css";


const Register = () => {

    

    const history = useHistory();

    const authenticate =  () => {


        var username = document.getElementById("username").value;
        var password =document.getElementById("password").value;
        

        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response =>response.json())
            .then(result=>{
                /*
                if(result==="USER_EXIST"){
                    alert("The user exist");
                }else if(result==="USER_INSERTED"){
                    alert("User created suscessfully")
                    history.push("/Login");
                }
                */

                switch(result){
                    case "USER_EXIST":
                        alert("The user exist");
                        break;
                    case "USER_INSERTED":
                        alert("User created suscessfully")
                        history.push("/Login");
                        break;
                     default:
                         alert("ERROR IN THE SERVER");
                         break;   
                }
            });

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




    return (


        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Welcome to ChatBox!</h1>
                <h4 >Please register</h4>
                <input type="text" id="username" className="form-control" name="username" placeholder="Username" required="" autoFocus="" maxLength="10" />
                <br></br>

                <input type="password" id="password" className="form-control" name="password" placeholder="Password" required="" />

                <br></br>
                <button className="btn btn-lg btn-success btn-block" onClick={() => { authenticate() }}>Register</button>

                <br></br>
                <br></br>
                <button type="button" className="btn btn-link" onClick={() => { history.push("/Login") }}>Log in</button>

            </div>


        </div>





    );

}



export default Register;