import { Menu } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <header className="navbar bg-base-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <nav className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="w-5 h-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#tentang">Tentang</a>
            </li>
            <li>
              <a href="#tech">Teknologi</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <p className="text-xl font-semibold lg:pl-36">Portofolio</p>
      </div>
      <div className="navbar-end hidden lg:flex lg:pr-32">
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#beranda" className="btn btn-ghost">
                Beranda
              </a>
            </li>
            <li>
              <a href="#tentang" className="btn btn-ghost">
                Tentang
              </a>
            </li>
            <li>
              <a href="#tech" className="btn btn-ghost">
                Teknologi
              </a>
            </li>
            <li>
              <a href="#projects" className="btn btn-ghost">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-ghost">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
