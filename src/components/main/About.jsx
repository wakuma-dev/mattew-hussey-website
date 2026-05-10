import React, { useRef, useEffect, useState, useContext } from "react"; // Added useContext
import { ThemeContext } from "../../context/ThemeProvider";
import { useTranslation } from "react-i18next";
import img from "../../assets/road-trip-with-raj-xOxWmr9NoSs-unsplash.jpg";

export default function About() {
  const { t } = useTranslation();
  const { state } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }, // Fixed spelling of threshold
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.disconnect();
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Fixed colon and comma
  };

  return (
    <div
      className={`w-full min-h-[80vh] flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 md:px-10 lg:px-12 py-8 transition-all duration-150 ${
        state.theme === "light"
          ? "bg-[#f7f7f9] text-black"
          : "bg-[#191b21] text-white"
      }`}
    >
      {/* Content Section */}
      <div className="flex flex-col items-start gap-4 ml-0 md:ml-10">
        <h3 className="font-poppins w-full text-[35px] leading-[34px] md:text-[56px] md:leading-[67px] font-medium">
          {t("Let me guide you")} <br />
          {t("through this..")}
        </h3>
    

        <p className="font-poppins w-full max-w-[590px] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] font-normal">
          {t(
            "If you’re frustrated and tired of trying to figure out relationships on your own, I’m the partner you’ve been searching for.",
          )}
        </p>
        <p className="font-poppins w-full max-w-[630px] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] font-normal">
          {t(
            "As the leading love life expert and confidence coach for women, I’ve helped millions of women just like you get the love life of their dreams through my New York Times bestselling book, sold-out live seminars, and powerful training videos.",
          )}
        </p>
        <span className="font-poppins text-[16px] leading-[24px] text-[#1fabb5] font-medium">
          {t("And I’ll do the same for you.")}
        </span>
      </div>

      {/* Image Section (Added this to use your imgRef and style) */}
      <div
        ref={imgRef}
        style={backgroundImageStyle}
        className={`w-full md:w-1/2 h-[300px] md:h-[500px] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
