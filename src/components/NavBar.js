import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [expanded, setExpanded] = useState(false);

  const ref = useRef(null);

  // if user clicks a nav link or off the toggle button, the dropdown will close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref])

  const handleSignOut =  async (event) => {
    try {
      axios.post('dj-rest-auth/logout/')
      setCurrentUser(null);
    } catch(err) {
      console.log(err)
    }
  }

  const addPostIcon = (
    <NavLink
      to="/posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className="far fa-plus-square"></i>Add Post
    </NavLink>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-sign-in"></i>Sign In
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign Up
      </NavLink>
    </>
  );

  const loggedInIcons = (
    <>
      <NavLink
        to="/yourvotes"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i class="fa-solid fa-check-to-slot"></i>Your Votes
      </NavLink>
      <NavLink
        to="/favourites"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i class="fa-solid fa-star"></i>Favourites
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40}/>
      </NavLink>
      <NavLink
        to="/"
        className={styles.NavLink}
        onClick={handleSignOut}
      >
        <i class="fa-solid fa-door-closed"></i>Sign Out
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
