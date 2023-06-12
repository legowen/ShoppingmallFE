import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const menuList = ["Women", "Men", "Divided", "Baby", "Kids", "Beauty", "Sport", "Sale", "Sustainability"];

const navigate = useNavigate ();

const goToLogin = () => {
    navigate("/login");
};

  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>sign in</div>
            </div>
        </div>
        <div className="nav-section">
            <img width={100}
            src= "https://www2.hm.com/hm-logo.png"/>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=> (
                 <li>{menu}</li>
                ))}  
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type ='text'/>
            </div>
        </div>
    </div>
  );
};

export default Navbar