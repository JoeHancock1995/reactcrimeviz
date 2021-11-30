import React, * as reacy from 'react';

// import './Header.css';
// import Logo from './vectors/logo.png';
// import linkedin from './vectors/linkedin-6-48.png';
// import github from './vectors/github-10-48.png';

function Header() {
  return (
      
    <div>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between"> */}
        <ul className="navbar-nav mr-auto">
            <h1> Austin, Texas Crime visualization </h1>
        </ul>
        {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item linkstr">
                <Link className="Nav-link" to="/Plume">Plume</Link>
            </li>
        </ul> */}
    
</div>
  );
}
export default React.memo(Header);