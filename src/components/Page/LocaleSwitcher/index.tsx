"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from "react";

interface LocaleSwitcherProps extends HTMLAttributes<HTMLSelectElement> {}

const LocaleSwitcher: ForwardRefRenderFunction<
  HTMLSelectElement,
  LocaleSwitcherProps
> = ({ ...restProps }, ref) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Tách path hiện tại, thay locale bằng newLocale
    const segments = pathname.split("/");
    segments[1] = newLocale; // vì segment 0 là "" (do string bắt đầu bằng "/")

    const newPath = segments.join("/");
    router.push(newPath);
  };
  return (
    <select
      ref={ref}
      {...restProps}
      defaultValue={pathname.split("/")[1]}
      onChange={handleChange}
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default forwardRef(LocaleSwitcher);
