import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Button } from "../../ui/Button";

export default function Banner() {
  const { t } = useTranslation();
  const { state } = useContext(ThemeContext);

  const handleRedirect = () => {
    window.open(
      "https://ai.matthewhussey.com/?_gl=1*xxou4o*_gcl_au*ODczMzMxMDY5LjE3NzgyOTkxNTY.&_ga=2.180454639.974411293.1778299158-1027854527.1778299157",
      "_blank",
    );
  };

  return (
    <div
      className={`w-full md:max-w-5xl mx-auto rounded-md backdrop-blur-lg flex flex-col items-center text-center px-2 py-4
      ${
        state.theme === "light"
          ? "bg-[#ffffff] text-black"
          : "bg-[#000000] text-white"
      }`}
    >
      <h2 className="text-[20px] leading-[24px] md:text-[36px] md:leading-[43px] font-medium">
        {t("newline1")}
      </h2>

      <p className="text-[20px] leading-[24px] md:text-[26px] md:leading-[32px] font-medium">{t("newline2")}</p>

      <Button variant="secondary" className="mt-4" onClick={handleRedirect}>
        {t("ask_matthew_ai")}
      </Button>
    </div>
  );
}
