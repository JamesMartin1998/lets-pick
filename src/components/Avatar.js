import React from 'react';
import styles from '../styles/Avatar.module.css';

// Creates avatar component to display user profile images
// code used from Code Institute's Moments project
const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />{' '}
      {text}
    </span>
  );
};

export default Avatar;
