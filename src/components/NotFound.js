import React from 'react'
import NoResults from '../assets/no-results.png'
import styles from '../../src/styles/NotFound.module.css'
import Asset from '../components/Asset.js'

const NotFound = () => {
  return (
    <div className={styles.NotFound}><Asset src={NoResults} message="Sorry the page does not exist" /></div>
  )
}

export default NotFound