import React from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from 'lucide-react'
import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* netflix image*/}
        <img className={styles.logoImg} src={NetflixBannerLogo} alt="Netflix logo"/>
        
        {/* description */}
        <h1 className={styles.description}>
          Shandaland's Emmy-winning series brings Julia Quinn's best-selling
          novels to life with a fresh take on the period drama.
        </h1>
        {/* buttons */}

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30}/>
            Play
          </button>
          <button className={styles.button}>
            <Info size={30}/>
            My List
          </button>
        </div>
      </div>
      {/* fadding */}
      <div className={styles.fadeButton}>
      </div>
    </div>
  );
}

export default Banner;
