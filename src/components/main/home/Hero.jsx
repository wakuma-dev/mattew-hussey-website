import React, {useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeProvider'
import { useTranslation } from 'react-i18next';
import Banner from './Banner';
import Partner from './Partner';

const Hero = () => {
    const {state} = useContext(ThemeContext);
    const {t} = useTranslation();
  return (
    <div
      className={`w-full min-h-screen transition-all duration-150 px-4 sm:px-6 md:px-10 lg:px-12
     ${state.theme === "light" ? "bg-[#f6f7f8] text-black" : "bg-[#181a20] text-white"}`}
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 ml-0 md:ml-10 py-8">
        <h1 className="font-kiona text-[27px] leading-[27px] md:text-[25px] md:text-[25px] lg:text-[30px] lg:leading-[30px] font-bold">
          {t("title")}
        </h1>
        <p
          className="font-kiona w-full max-w-2xl text-[34px] leading-[40px] md:text-[55px] md:text-[55px] 
        lg:text-[78px] lg:leading-[78px] font-bold"
        >{t("subtitle")}</p>
      </div>
      <Banner />
      <Partner />
    </div>
  );
}

export default Hero