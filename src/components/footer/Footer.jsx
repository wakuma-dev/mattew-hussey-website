import {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { NavLink } from 'react-router-dom';
export default function Footer(){
    const {state} = useContext(ThemeContext);
    return(
        <footer className={`
        ${state.theme === "light" ? "bg-white" : "bg-black"}
       transition-all duration-150 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
        <div className="flex flex-col items-start gap-3">
            
        </div>
        </footer>
    )
}