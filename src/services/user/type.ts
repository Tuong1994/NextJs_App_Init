import { ImageUpload } from "../image/type";
import { EGender, ERole } from "./enum";

export type UserAddress = {
  id?: string;
  address?: string;
  addressEn?: string;
  addressVn?: string;
  fullAddress?: string;
  cityCode?: number;
  districtCode?: number;
  wardCode?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type User = {
  id?: string;

  email: string;
  password?: string;
  phone: string;
  role: ERole | null;

  firstName?: string;
  lastName?: string;
  fullName?: string;
  gender?: EGender | null;
  birthday?: Date | string;

  address?: UserAddress;
  image?: ImageUpload;

  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type UserFormData = Omit<User, "id" | "fullName" | "createdAt" | "updatedAt">;
