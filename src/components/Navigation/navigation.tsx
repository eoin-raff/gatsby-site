import React from 'react'
import { Link } from 'gatsby'

// import * as styles from './styles.css'

const styles = {
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    height: '20vh',
    maxHeight: '100px',
    fontSize: '1.25em',
    backgroundColor: '#A4AAF4'
  },
  
  navigationItem: {
    display: 'inlineFlex',
    alignSelf: 'center',
    margin: '0 1em',
  },
  
  navigationItemLink: {
    color: 'currentColor',
  },
  
}

export default () => (
  <nav role="navigation">
    <ul style={{...styles.navigation}}>
      <li style={{...styles.navigationItem}}>
        <Link style={{...styles.navigationItemLink}} to="/">Home</Link>
      </li>
      <li style={{...styles.navigationItem}}>
        <Link style={{...styles.navigationItemLink}} to="/projects/">Projects</Link>
      </li>
      <li style={{...styles.navigationItem}}>
        <Link style={{...styles.navigationItemLink}} to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)
