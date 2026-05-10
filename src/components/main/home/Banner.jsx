import React, {useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeProvider'
import { useTranslation } from 'react-i18next';
export default function Banner(){
    const {t} = useTranslation();
    const {state} = useContext(ThemeContext);
    return (
      <div
        className={`w-full md:max-w-5xl mx-auto rounded-md backdrop-blur-lg flex flex-col items-center text-center px-2 py-4
        ${state.theme === "light" ? "bg-[#ffffff] text-black" : "bg-[#000000] text-white"}`}
      >
        <h2 className="text-[20px] leading-[24px] md:text-[36px] md:leading-[43px] font-medium">
          {t("newline1")}
        </h2>
        <p className="">{t("newline2")}</p>
      </div>
    );
}