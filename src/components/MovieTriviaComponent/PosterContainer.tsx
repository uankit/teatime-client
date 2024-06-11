import React, { ReactElement } from 'react'

type Props = {
    imageSrc: string
}

const PosterContainer:React.FC<Props> = ({imageSrc}):ReactElement => {
  return (
    <div className="poster-container">
    <img
      className="one"
      src={imageSrc}
    />
  </div>
  )
}

export default PosterContainer