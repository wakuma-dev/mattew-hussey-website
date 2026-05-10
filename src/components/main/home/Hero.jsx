import React, {useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeProvider'
const Hero = () => {
    const {state} = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-150 px-4 sm:px-6 md:px-10 lg:px-12
     ${state.theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <div className="flex flex-col items-center md:items-start gap-3 ml-0 md:ml-8">
        <h1 className="text-[27px] leading-[27px] md:text-[25px] md:text-[25px] lg:text-[30px] lg:leading-[30px] font-bold">Hey It's Matthew.</h1>
        <p className="text-[57px] leading-[57px] md:text-[55px] md:text-[55px] lg:text-[78px] lg:leading-[78px] font-bold">What's Your #1 Dating Problem?</p>
      </div>
    </div>
  );
}

export default Hero