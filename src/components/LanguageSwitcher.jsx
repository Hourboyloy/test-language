import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = useLocale(); // Get the current locale from next-intl
  const [currentLocale, setCurrentLocale] = useState(locale || "en"); // Default to "en" if no locale is set

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "km" : "en"; // Toggle between "en" and "km"
    setCurrentLocale(newLocale); // Update the locale in state

    // Get the current pathname without locale prefix
    const path = window.location.pathname;
    const newPath = path.replace(`/${currentLocale}`, `/${newLocale}`); // Replace the current locale with the new one

    // Update the URL to the new locale
    router.push(newPath);
  };

  return (
    <button onClick={toggleLanguage}>
      {currentLocale === "en" ? "Switch to Khmer" : "Switch to English"}
    </button>
  );
}
