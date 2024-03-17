import "./Headers.css"
import logo from "../../assets//images/logo.png"
import NavItems, {NavItemsDropDown } from "../NavItem/NavItems.js"

const Headers = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark cyborg-navbar">
  <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <NavItems>
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </NavItems>

        <NavItems>
            <a className="nav-link" href="#">Browser</a>
        </NavItems>

      <NavItemsDropDown>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Details
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </NavItemsDropDown>

      <NavItems>
            <a className="nav-link disabled" href="#">Streams</a>
        </NavItems>
        <NavItems>
            <a className="nav-link disabled" href="#">Profile</a>
        </NavItems>

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Headers
