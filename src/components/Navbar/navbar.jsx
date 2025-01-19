import "./navbar.css";
import logo from "../../assets/yacht-rental-dubai-logo.png";
import barIcon from "../../assets/barIcon.png";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    // Scroll to top on location change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar lr-space" id="hero">
        <div className="bar-icon" onClick={toggleMenu}>
          <img src={barIcon} alt="Menu Icon" />
        </div>
        <div className="logo">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div ref={menuRef} className={`nav-lists ${menuVisible ? "" : "hide"}`}>
          <ul className="center">
            <li>
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/allyachts" onClick={scrollToTop}>
                Yachts
              </Link>
            </li>
            <li>
              <Link to="/fishingtrips" onClick={scrollToTop}>
                Fishing Trips
              </Link>
            </li>
            <li>
              <Link to="/charter" onClick={scrollToTop}>
                Charter Yachts
              </Link>
            </li>
            <li>
              <Link to="/packages" onClick={scrollToTop}>
                Packages
              </Link>
            </li>
            <li>
              <Link to="/newYear" onClick={scrollToTop}>
                NYE
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Navbar;
