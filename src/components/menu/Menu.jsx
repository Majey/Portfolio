// import { useState } from "react";
import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
            <li onClick={handleClick}>
                <a href="#intro">Home</a>
            </li >

            <li onClick={handleClick}>
                <a href="#portfolio">Portfolio</a>
            </li>

            <li onClick={handleClick}>
                <a href="#works">Works</a>
            </li>

            <li onClick={handleClick}>
                <a href="#testimonials">Testimonials</a>
            </li>

            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>

            <li onClick={handleClick}>
                <a href="#blog">Blog</a>
            </li>
        </ul>
    </div>
  )
}
