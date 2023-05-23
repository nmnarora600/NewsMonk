import React,{useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [firstLoad, setFirstLoad]=useState(true);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  let navigate= useNavigate();

  useEffect(()=>{
    if(firstLoad){
    navigate('/')
    setFirstLoad(false);
  }
  },[firstLoad,navigate])
  return (
    <>
       <nav
        className={`navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-fixed-top navbar-default ${
          isMenuOpen ? "show" : ""
        }`}
        data-bs-theme="dark"
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/general"
            style={{ color: "rgb(60, 209, 60)" }}
            onClick={handleLinkClick}
          >
            News<span style={{ color: "yellow" }}>Monk</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/business" onClick={handleLinkClick}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/entertainment" onClick={handleLinkClick}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link mx-1" to="/health" onClick={handleLinkClick}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/science" onClick={handleLinkClick}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/sports" onClick={handleLinkClick}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/technology" onClick={handleLinkClick}>
                  Technology
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
