import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  // signs out a user
  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/')
      setCurrentUser(null);
    } catch(err) {
      console.log(err)
    }
  }

  // specific icons to only be seen by logged out users
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

  // specific icons to only be seen by logged in users
  const loggedInIcons = (
    <>
      <NavLink
        to="/yourvotes"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-solid fa-check-to-slot ${styles.hide}`}></i>Your Votes
      </NavLink>
      <NavLink
        to="/favourites"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-solid fa-star ${styles.hide}`}></i>Favourites
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
        <i className={`fa-solid fa-door-closed ${styles.hide}`}></i>Sign Out
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
        <Navbar.Toggle className={styles.Hamburger} ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className={`fas fa-home ${styles.hide}`}></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
