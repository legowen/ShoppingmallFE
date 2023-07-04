import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = [
        "Women",
        "Men", 
        "Divided", 
        "Baby", 
        "Kids", 
        "Beauty", 
        "Sport", 
        "Sale", 
        "Sustainability"
    ];

    let [width, setWidth] = useState(0);

    let navigate = useNavigate ();

    //search function
    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
        // Read input words
          navigate(`?q=${event.target.value}`);
          // change to url
        }
      };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>Sign out</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>Sign In</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" onKeyPress={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar