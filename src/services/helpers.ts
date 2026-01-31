import { ApiQuery } from "./type";
import { ApiResponse, ResponseError } from "./type";

// const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/" : "";

export const BASE_URL = "http://localhost:5000/";

export const HttpStatus = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  GATEWAY_TIME_OUT: 504,
  INTERNAL_SERVER: 500,
};

export const Method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const LIST_LIMIT_ITEMS = 20;

export const defaultResponse = <T>(): ApiResponse<T> => ({ data: {} as T, success: false });

export const apiResponseError = (status: number, error: any) => {
  let responseError: ResponseError = { status: 0, message: "" };
  responseError = {
    status: status ? status : 0,
    message: error?.message ? error?.message : "Invalid",
  };
  return responseError;
};

export const apiIsAbort = <T>(response: ApiResponse<T>) => {
  const status = response.error?.status ?? 0;
  return status === 0 || status === -1;
};

export const getApiQuery = (query: ApiQuery) => {
  let {
    langCode,
    page,
    limit,
    keywords,
    sortBy,
    ids,
    userId,
    categoryId,
    transactionId,
    imageId,
    cityId,
    cityCode,
    districtId,
    districtCode,
    wardId,
    wardCode,
    role,
    gender,
  } = query;

  let rs = "?";

  const result = Object.entries(query).map(([key, value], idx) => {
    let queryName = key;
    let queryValue = value;
    if (!value) return;
    if (queryName === "page" && Number(queryValue) < 1) queryValue = 1;
    if (queryName === "limit" && (Number(queryValue) < 10 || Number(queryValue) > 100))
      queryValue = LIST_LIMIT_ITEMS;
    return `${idx > 0 ? "&" : ""}${queryName}=${queryValue}`;
  });

  // page && page < 1 && (page = 1);
  // limit && limit < 10 && (limit = LIST_LIMIT_ITEMS);
  // limit && limit > 100 && (limit = LIST_LIMIT_ITEMS);

  // langCode && (rs += `langCode=${langCode}`);
  // page && (rs += `&page=${page}`);
  // limit && (rs += `&limit=${limit}`);
  // keywords && (rs += `&keywords=${keywords}`);
  // sortBy && (rs += `&sortBy=${sortBy}`);

  // ids && (rs += `&ids=${ids}`);
  // userId && (rs += `&userId=${userId}`);
  // categoryId && (rs += `&categoryId=${categoryId}`);
  // transactionId && (rs += `&transactionId=${transactionId}`);
  // imageId && (rs += `&imageId=${imageId}`);
  // cityId && (rs += `&cityId=${cityId}`);
  // cityCode && (rs += `&cityCode=${cityCode}`);
  // districtId && (rs += `&districtId=${districtId}`);
  // districtCode && (rs += `&districtCode=${districtCode}`);
  // wardId && (rs += `&wardId=${wardId}`);
  // wardCode && (rs += `&wardCode=${wardCode}`);
  // role && (rs += `&role=${role}`);
  // gender && (rs += `&gender=${gender}`);

  return rs + result.join("");
};
