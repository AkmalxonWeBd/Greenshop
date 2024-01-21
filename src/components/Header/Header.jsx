import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className='header'>
        <div className='logoImg'>
          <img src="./logoimg/Logo.png" alt="" />
        </div>
        <div className='Menu'>
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`} to="/">Home</NavLink>
          <NavLink className={`span , span2 ${location.pathname === '/shop' && 'active'}`} to="/shop">shop</NavLink>
          <NavLink className={`span , span3 ${location.pathname === '/Plant_Care' && 'active'}`} to="/Plant_Care">Plant Care</NavLink>
          <NavLink className={`span , span4 ${location.pathname === '/blogs' && 'active'}`} to="/blogs">blogs</NavLink>
        </div>
        <div className="menuuu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='logoButtons'>
          <div className='logoButtons1'>
            <img src="./logoimg/Vector (2).png" alt="" />
            <Link to="/shoppingCard"><img src="./logoimg/Vector (3).png" alt="" /></Link>
          </div>
          <div>
            <button className='buttons11'> <img src="./logoimg/Logout.png" alt="" /> Kirish</button>
          </div>
        </div>
      </div>
    </header>
  )
}
