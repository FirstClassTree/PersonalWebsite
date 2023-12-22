import { Link } from "react-router-dom";

function Nav() {



    
    return(
<header className="header">
  <div className="logo-container">
    <Link to={`/Projects`}>
      <img className="header-logo" src="\src\assets\logo2.svg" />
    </Link>
  </div>
  <div className="header-a">
    <Link to="/">Home</Link>
  </div>
  <div className="header-a">
    <Link to={`/Projects`} >Projects</Link>
  </div>
  <div className="header-a">
  <Link to={`/Draw`} >Draw</Link>
  </div>
  <div className="header-a">
  <Link to={`/About`} >About</Link>
  </div>
</header>
    );
}
export default Nav;
