import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header = (props)=>{


  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to='/'> Home </Link>
        </div>
        <div className="nav__container">
        <ul className="nav__list-items">
          <li className="nav__list-item"><Link to='/tables'>Tables</Link></li>
          <li className="nav__list-item"><Link to='/dishes'>Dishes</Link></li>
          <li className="nav__list-item"><Link to='/waiters'>Waiters</Link></li>
          <li className="nav__list-item"><Link to='/orders'>Orders</Link></li>
        </ul>
        </div>
      </div>
    </header>
  )
}


export default Header