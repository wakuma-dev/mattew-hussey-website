import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { useTranslation } from "react-i18next";

export default function Logo() {
  const { state } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      <div
        className={`flex items-center justify-center p-2 border rounded-full ${
          state.theme === "light"
            ? "border-black text-black"
            : "border-white text-white"
        }`}
      >
        {t("mh")}
      </div>

      <p
        className={`leading-none text-[14px] ${
          state.theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {t("nameLine1")} <br />
        {t("nameLine2")}
      </p>
    </div>
  );
}
