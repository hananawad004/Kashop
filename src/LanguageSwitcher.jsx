// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <button onClick={toggleLanguage}>
//       Switch Language ({i18n.language})
//     </button>
//   );
// }
// import { IconButton, Tooltip } from "@mui/material";
// import { useTranslation } from "react-i18next";

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang);
//     document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
//   };

//   return (
//     <Tooltip title={i18n.language === "en" ? "العربية" : "English"}>
//       <IconButton
//         onClick={toggleLanguage}
//         sx={{
//           color: "#00ffea33",
//           border: "1px solid rgba(255,255,255,0.4)",
//           width: 36,
//           height: 36,
//           fontSize: 12,
//           fontWeight: 700,
//           "&:hover": {
//             backgroundColor: "rgba(255,255,255,0.15)",
//           },
//         }}
//       >
//         {i18n.language === "en" ? "AR" : "EN"}
//       </IconButton>
//     </Tooltip>
//   );
// }

// export default LanguageSwitcher;
import { IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  // const { setDirection } = useThemeContext();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    // const dir = newLang === "ar" ? "rtl" : "ltr";
    // document.documentElement.dir = dir;

  };

  return (
    <Tooltip title={i18n.language === "en" ? "العربية" : "English"}>
      <IconButton
        onClick={toggleLanguage}
        sx={{
          color: "#00ffea33",
          border: "1px solid rgba(255,255,255,0.4)",
          width: 36,
          height: 36,
          fontSize: 12,
          fontWeight: 700,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.15)",
          },
        }}
      >
        {i18n.language === "en" ? "AR" : "EN"}
      </IconButton>
    </Tooltip>
  );
}

export default LanguageSwitcher;
