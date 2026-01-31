import { ELang, ESort } from "@/common/enum";
import { EGender, ERole } from "./user/enum";

export type Paging<T> = {
  totalItems: number;
  page: number;
  limit: number;
  items: T[];
};

export type List<T> = {
  totalItems: number;
  items: T[];
};

export type ApiQuery = {
  page?: number;
  limit?: number;
  keywords?: string;
  langCode?: ELang;
  sortBy?: ESort;

  ids?: string;
  userId?: string;
  categoryId?: string;
  transactionId?: string;
  imageId?: string;
  cityId?: string;
  cityCode?: string;
  districtId?: string;
  districtCode?: string;
  wardId?: string;
  wardCode?: string;

  role?: ERole;
  gender?: EGender;
  startDate?: string;
  endDate?: string;
  cashflow?: string;
  paymentMode?: string;
  min?: number;
  max?: number;
};

export interface ApiConfig<T> {
  method: string;
  apiPath: string;
  abortKey?: string;
  body?: T;
  options?: RequestInit;
  token?: string; // cho server actions
  auth?: boolean; // auto attach token phía browser
}

export type ResponseError = {
  status: number;
  message: string;
};

export type ResponseResult = {
  error?: ResponseError;
  success?: boolean;
};

export interface ApiResponse<T> extends ResponseResult {
  data: T;
}
