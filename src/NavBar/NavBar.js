import "./NavBar.css";
const NavBar = () => {

    return (
        <header className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
        <a className="navbar-brand" href="#">ChatBox</a>
        <button type="button" id="signout" class="btn btn-danger ml-auto mr-1">Sign out</button>
      </nav>
        </header>
       
      
    );
}

export default NavBar;