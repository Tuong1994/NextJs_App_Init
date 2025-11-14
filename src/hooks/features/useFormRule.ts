"use client";

import { FormRule } from "@/components/Control/type";
import { EMAIL_REGEX, PHONE_REGEX, WHITE_SPACE_REGEX } from "@/common/constant/regex";
import { useTranslations } from "next-intl";

const useFormRule = () => {
  const t = useTranslations("common.form");

  const required = (): FormRule[] => {
    return [{ required: true, message: t("rule.required") }];
  };

  const minNumber = (min: number): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { min, message: t("rule.min", { min: String(min) }) },
    ];
  };

  const maxNumber = (max: number): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { max, message: t("rule.max", { max: String(max) }) },
    ];
  };

  const email = (): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: t("rule.whiteSpace") },
      { email: true, pattern: EMAIL_REGEX, message: t("rule.email") },
    ];
  };

  const password = (min = 6, max = 20): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: t("rule.whiteSpace") },
      {
        minLength: min,
        message: t("rule.minLength", { min: String(min) }),
      },
      {
        maxLength: max,
        message: t("rule.maxLength", { max: String(max) }),
      },
    ];
  };

  const phone = (): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: t("rule.whiteSpace") },
      { phone: true, pattern: PHONE_REGEX, message: t("rule.phone") },
    ];
  };

  const match = (match: string): FormRule[] => {
    return [
      { required: true, message: t("rule.required") },
      { validate: (value) => value === match || t("rule.confirmPassword") },
    ];
  };

  return { required, minNumber, maxNumber, email, password, phone, match };
};

export default useFormRule;
