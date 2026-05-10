import React, {useState, useContext, useEffect, useRef} from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import img from '../../assets/LoveLife_3D-HC-spine-out_015-ALT-1024x1024.png';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
export default function Testimonals(){
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const {state} = useContext(ThemeContext);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
                observer.unobserve(entry.target)
            }
        },
        {threshold: 0.1},
    );
        if(sectionRef.current){
        observer.observe(sectionRef.current);
        }
        return()=> {
          if(sectionRef.current) observer.disconnect();
        }
    
    }, []);
    const bgStyle = {
       backgroundImage: `url(${img})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat"
    }
    return (
      <section
        className={`${
          state.theme === "light"
            ? "bg-[#f7f7f9] text-black"
            : "bg-[#191b21] text-white"
        }
                  relatie w-full max-w-8xl mx-auto min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 py-10
                  `}
      >
        <div className="flex flex-col items-center md:items-start mt-8">
          <h4 className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-center md:text-left font-semibold w-full max-w-lg font-avenir">
            {t(
              "THE NEW YORK TIMES BESTSELLING AUTHOR OF GET THE GUY BRINGS YOU...",
            )}
          </h4>
          <p className="py-3 text-[30px] leading-[30px] md:text-[40px] md:leading-[50px] font-avenir font-bold w-full max-w-4xl text-center md:text-left">
            {t(
              "How to Raise Your Standards, Find Your Person, and Live Happily (No Matter What",
            )}
          </p>
          <Button variant="secondary">{t("ORDER NOW")}</Button>
        </div>
        <div
          className={`w-full max-w-5xl mt-8 mx-auto h-auto p-4 rounded-md flex flex-col md:flex-row gap-6 transition-all duration-150
         ${state.theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        >
          <div
            ref={sectionRef}
            style={bgStyle}
            className={`w-full md:w-1/2 h-[200px] md:h-[300px] object-contain transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
          <div className="flex flex-col justify-center gap-6">
            <p className="text-[20px] md:text-[24px] leading-[25px] md:leading-[32px] font-medium">
              {t(
                "Matthew’s unique voice is one I return to again and again for both my confidence and my love life . . . perfect for anyone looking for actionable wisdom and a path to reconnecting with themselves.",
              )}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h5 className="text-[17px] leading-[20px] font-bold text-[#1fabb5]">{t("—DREW BARRYMORE")}</h5>
              <p className="text-[14px] leading-[30px] font-normal text-[#1fabb5]">
                {t(
                  "Actor, talk show host, writer, producer, business owner, and mom",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    );

}
