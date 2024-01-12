import { ReactNode } from 'react'

type PropTypes = {
            children: ReactNode,
            className: string,
}
const Container = ({children, className}: PropTypes) => {
  return (
    <div className={`w-[90%] md:w-[86%] lg:w-[75%] mx-auto ${className}`}>
            {children}
    </div>
  )
}

export default Container