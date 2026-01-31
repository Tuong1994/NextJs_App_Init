"use server";

import { ApiQuery, Paging } from "../type";
import { User } from "./type";
import { getApiQuery } from "../helpers";
import FetchServer from "../fetch.server";
import userApiPaths from "./path";

export const getUsers = async (query: ApiQuery) => {
  const response = await FetchServer.Get<Paging<User>>(userApiPaths.getList + getApiQuery(query), "getUsers");
  return response;
};

export const getUser = async (query: ApiQuery) => {
  const response = await FetchServer.Get<User>(userApiPaths.getDetail + getApiQuery(query), "getUser");
  return response;
};

export const createUser = async (data: FormData) => {
  const response = await FetchServer.Post<FormData, User>(userApiPaths.create, data, "createUser");
  return response;
};

export const updateUser = async (query: ApiQuery, data: FormData) => {
  const response = await FetchServer.Put<FormData, any>(
    userApiPaths.update + getApiQuery(query),
    data,
    "updateUser"
  );
  return response;
};

export const removeUsers = async (query: ApiQuery) => {
  const response = await FetchServer.Delete<any, any>(userApiPaths.remove + getApiQuery(query), "removeUsers");
  return response;
};
