import React from "react";

import './Header.css';

export function Header() {
  return (
    <div>
      <div className="flex header-bar">
        <div className="flex">
          <div className="icon-circle"></div>
          <h2 className="name-site">reddit<span>Clone</span></h2>
        </div>
        <div className="search-box">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search something awesome" className="search-input"></input>  
        </div>
        <div className="flex">
          <a href="www.google.com" className="login-link btn">Login</a>
          <a href="www.google.com" className="create-link btn">Create Account</a>
          <div className="icon-btn">
            <i class="bi bi-person"></i>
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  )
}