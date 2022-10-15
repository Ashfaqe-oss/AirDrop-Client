import React from 'react'
import styles from '../styles'
import { ethereumLogo } from '../assets'

const Loader = ({title}) => {
  return (
    // <div className="flex justify-center items-center py-3">
    //   <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"/>
    // </div>
    <div className={styles.loader}>
      <img src={ethereumLogo} alt="ethereumLogo" className={styles.loaderImg}/>
      <p className={styles.loaderText}>{title}</p>
    </div>
  )
}

export default Loader