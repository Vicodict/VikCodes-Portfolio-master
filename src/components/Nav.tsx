import React, { EventHandler, MouseEvent, useCallback, useState } from 'react'
import { FaAffiliatetheme, FaBook, FaEnvelope, FaHome, FaServicestack, FaUser } from 'react-icons/fa'
type propType = {
  href: string,
  icon: JSX.Element,
  isActive?: boolean,

 onClick: EventHandler<React.SyntheticEvent>
}

const NavLink = ({ href, icon, isActive = false, onClick}: propType): JSX.Element => {

  return (
    <a href={href} className={`bg-transparent p-4 rounded-full text-lg text-light hover:bg-[rgba(0,0,0,0.3)]
     ${isActive && 'bg-[#1f1f38] text-white'}`} onClick={onClick}>{icon}</a>
  )
}
const Nav = (): JSX.Element => {
  const [loc, setLoc] = useState("#")
  const handleOnclick = useCallback((e:MouseEvent<HTMLButtonElement>):void => {
setLoc(e.currentTarget.attributes[0].value)
  },[])

  return (
    <nav className="bg-[rgba(0,0,0,0.3)] w-max py-3 px-7 z-20 fixed left-1/2 bottom-8 flex -translate-x-1/2 gap-4 rounded-full backdrop-blur-lg">
      <NavLink href='#' icon={<FaHome />} isActive={loc === "#"} onClick={handleOnclick} />
      <NavLink href='#about' icon={<FaUser />} isActive={loc === "#about"} onClick={handleOnclick} />
      <NavLink href='#experience' icon={<FaBook />} isActive={loc === "#experience"}  onClick={handleOnclick}/>
      <NavLink href='#services' icon={<FaServicestack />} isActive={loc === "#services"} onClick={handleOnclick} />
      <NavLink href='#portfolio' icon={<FaAffiliatetheme />} isActive={loc === "#contact"} onClick={handleOnclick} />
      <NavLink href='#contact' icon={<FaEnvelope />} isActive={loc === "#contact"} onClick={handleOnclick} />

    </nav>
  )
}

export default Nav