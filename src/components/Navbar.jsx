import { Menu } from "lucide-react";
import React from "react";
import { motion } from "motion/react"
function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="navbar bg-base-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
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
              <a
                href="#beranda"
                onClick={(e) => handleSmoothScroll(e, "beranda")}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                onClick={(e) => handleSmoothScroll(e, "tentang")}
              >
                Tentang
              </a>
            </li>
            <li>
              <a href="#tech" onClick={(e) => handleSmoothScroll(e, "tech")}>
                Teknologi
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-xl font-semibold lg:pl-36">Portofolio</p>
      </div>
      <div className="navbar-end hidden lg:flex lg:pr-32">
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <motion.a
                href="#beranda"
                className="btn btn-ghost"
                onClick={(e) => handleSmoothScroll(e, "beranda")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Beranda
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#tentang"
                className="btn btn-ghost"
                onClick={(e) => handleSmoothScroll(e, "tentang")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tentang
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#tech"
                className="btn btn-ghost"
                onClick={(e) => handleSmoothScroll(e, "tech")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Teknologi
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#projects"
                className="btn btn-ghost"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                className="btn btn-ghost"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
