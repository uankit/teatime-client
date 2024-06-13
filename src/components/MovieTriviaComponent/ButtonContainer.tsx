import { Button } from 'antd'
import React, { ReactElement } from 'react'
import styles from "../../styles/MovieTriviaPage.module.css";


type Props = {
  handleSubmit: () => void
}
const ButtonContainer: React.FC<Props> = ({handleSubmit}):ReactElement => {

  return (
    <div className={styles.buttonContainer}>
        <Button onClick={handleSubmit}>I'm done</Button>
    </div>
  )
}

export default ButtonContainer