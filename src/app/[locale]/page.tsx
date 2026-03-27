import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { profileContent } from "@/content/profile";
import { isValidLocale, locales } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const content = profileContent[locale];
  const title =
    locale === "pt"
      ? `${content.name} | Portfolio de Desenvolvimento`
      : `${content.name} | Developer Portfolio`;
  const description = content.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "pt" ? "pt_PT" : "en_US",
      url: `/${locale}`,
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale} />;
}
