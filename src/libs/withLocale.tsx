import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { ComponentType } from "react";

export default function withLocale<P>(
  Component: ComponentType<P & { locale: string }>
) {
  return function Wrapper({ params, ...rest }: { params: Promise<{ locale: string }> } & P) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <Component {...(rest as P)} locale={locale} />;
  };
}
