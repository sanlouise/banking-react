import React from 'react';

const NavBar = (props) => (
  <div>
    <nav className="black">
      <div className="nav-wrapper">
        <p>Navigation</p>
      </div>
   </nav>
   {props.children}
 </div>


);

export default NavBar;
