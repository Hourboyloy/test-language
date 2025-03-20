import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "km"],
  defaultLocale: "en",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  // Ensure the locale exists, otherwise, trigger a 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    // Correct HTML structure: <html> should be the root element, not inside <body>
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
