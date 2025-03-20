import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { defineRouting } from "next-intl/routing";
import { routing } from "../../i18n/routing";

export default function LocaleLayout({ children, params }) {
  const locale = params?.locale; // Get locale from params

  // Verify locale exists
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
