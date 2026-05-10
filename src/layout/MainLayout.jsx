import React, {useState, useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return ()=> {
    window.removeEventListener("scroll", handleScroll)
  }
  }, []);
  return (

   <>
   <Navbar isScrolled={isScrolled}/>
   <main>
    <Outlet />
   </main>
   </>
  )
}

export default MainLayout