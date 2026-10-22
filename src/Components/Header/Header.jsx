import React from "react";
import { useState, useEffect } from 'react';
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";


function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // for blur
  const [isScrolled, setIsScrolled] = useState(false);


  // 
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// useEffect(() => {
//   // code

//   return () => {
//     // cleanup code
//   };
// }, [dependencies]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv-shows">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            {" "}
            Movies
          </Link>
          <Link className={styles.navLink} to="/new & popular">
            {" "}
            New and Populoar
          </Link>
          <Link className={styles.navLink} to="/my-list">
            {" "}
            My List
          </Link>
          <Link className={styles.navLink} to="/browse by language">
            Browse By Language
          </Link>
        </nav>
        {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            {/* Search  */}
            {/* // when click set to expand 
                // then next click reverse */}

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {/* onclick function */}
            {/* the update is monitered by the state and we make apear and disapear */}
            {/* import use state from react */}
            {/* at the top create stste variale named isSearchOpen*/}

            {isSearchOpen && (
              // it checks the isSearchOpen and if it true it expands the search tag or the input box
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
                // it inherts the style from searchInput
              />
            )}
          </div>

          {/* Notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />

            {/* Circle with number So Span nedeed */}
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}

          <div className={styles.profileContainer}>
            <button 
            onClick={()=>setIsProfileOpen(!isProfileOpen)}
            className={styles.profileButton}>
              {/* user icon */}
              {/* In  DropDown feature angle downward button */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
            </button>

{
  isProfileOpen && (
    <div className={styles.profileMenu}>
      <Link className={styles.profileMenuItem}>Account</Link>
      <Link className={styles.profileMenuItem}>Help Center</Link>
      <hr className={styles.profileMenuDivider} />
      <button className={styles.profileMenuItem}>Sign out</button>
    </div>
  )
}


          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;