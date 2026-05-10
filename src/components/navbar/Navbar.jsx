import React, {useContext} from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'
import Cta from './Cta'
import { ThemeContext } from '../../context/ThemeProvider'
const Navbar = () => {
    const {state} = useContext(ThemeContext)
  return (
   <header className={`px-4 sm-px-6 md:px-10 lg:px-12 py-3 flex items-center justify-between transition-all duration-150
   ${state.theme === "light" ? "bg-white" : "bg-black"}
   `}>
    <Logo />
    <NavMenu />
    <Cta />
   </header>
  )
}

export default Navbar