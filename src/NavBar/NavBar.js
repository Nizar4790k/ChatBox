import "./NavBar.css";
import { useHistory } from "react-router-dom";
const NavBar = () => {

  const history = useHistory();

    return (
        <header className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
        <a className="navbar-brand" href="/ChatBox">ChatBox</a>
        <button type="button" id="signout" class="btn btn-danger ml-auto mr-1" onClick={()=>{history.push("/Login")}}>Sign out</button>
      </nav>
        </header>
       
      
    );
}

export default NavBar;