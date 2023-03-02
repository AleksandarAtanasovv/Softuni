import * as request from "./requester.js";
const baseUrl = "http://localhost:3030";

export const getAllCatches = () => {
  return request.get(`${baseUrl}/data/catches`);
};

export const updateOne = (body, id, accessToken) => {
  return request.put(`${baseUrl}/data/catches/${id}`, body, true, accessToken);
};
export const deleteOne = (id, accessToken) => {
  return request.del(`${baseUrl}/data/catches/${id}`, {}, true, accessToken);
};

export const createOne = (body, accessToken) => {
  return request.post(`${baseUrl}/data/catches`, body, true, accessToken);
};
