import React from 'react'
import Img from 'gatsby-image'

// import styles from './hero.module.css'

export default ({ data }) => (
  <div className={''}>
    <Img
      className={''}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={''}>
      <h3 className={''}>{data.name}</h3>
      <p className={''}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
