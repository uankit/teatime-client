import { Button } from 'antd'
import React, { ReactElement } from 'react'

const ButtonContainer: React.FC = ():ReactElement => {

  return (
    <div className='button-container'>
        <Button onClick={()=>{}}>I'm done</Button>
        <Button>I'm stuck</Button>
    </div>
  )
}

export default ButtonContainer