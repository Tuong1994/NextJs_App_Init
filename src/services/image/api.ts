"use server";

import { ApiQuery } from "../type";
import { getApiQuery } from "../helpers";
import { ImageUpload } from "./type";
import imageApiPaths from "./path";
import FetchClient from "../fetch.client";

export const customerUpload = async (query: ApiQuery, data: FormData) => {
  const response = await FetchClient.Post<FormData, ImageUpload>(
    imageApiPaths.customerUpload + getApiQuery(query),
    data
  );
  return response;
};

export const productUpload = async (query: ApiQuery, data: FormData) => {
  const response = await FetchClient.Post<FormData, ImageUpload>(
    imageApiPaths.productUpload + getApiQuery(query),
    data
  );
  return response;
};

export const removeImages = async (query: ApiQuery) => {
  const response = await FetchClient.Delete<any, any>(imageApiPaths.remove + getApiQuery(query));
  return response;
};
