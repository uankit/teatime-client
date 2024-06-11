import React, { ReactElement } from 'react'


type Props = {
    children: ReactElement
}
const FooterComponent:React.FC<Props> = ({children}):ReactElement => {
  return (
    <div className="footer">
    {children}
  </div>
  )
}

export default FooterComponent