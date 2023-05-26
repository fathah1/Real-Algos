import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { SiThealgorithms } from 'react-icons/si';
import {Link} from 'react-router-dom';

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Data Structures",
    url: "/datastructures",
  },

  {
    display: "Algorithms",
    url: "/algorithms",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <SiThealgorithms/>  	&nbsp; Real-Algos.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url} >{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
