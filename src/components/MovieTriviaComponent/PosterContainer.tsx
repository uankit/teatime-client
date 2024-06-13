import React, { ReactElement } from 'react'
import styles from "../../styles/MovieTriviaPage.module.css";

type Props = {
    imageSrc: string;
    blur: number
}

const PosterContainer:React.FC<Props> = ({imageSrc, blur}):ReactElement => {
  return (
    <div className={styles.posterContainer}>
    <img
      className={styles.posterImage}
      src={imageSrc}
      style={{"filter": `blur(${blur}rem)`}}
    />
  </div>
  )
}

export default PosterContainer