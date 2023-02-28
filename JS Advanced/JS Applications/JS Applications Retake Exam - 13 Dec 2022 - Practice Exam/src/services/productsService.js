import * as request from "../services/requester.js";
const baseUrl = "http://localhost:3030";

export const getAll = () => {
  return request.get(`${baseUrl}/data/products?sortBy=_createdOn%20desc`);
};
export const getOne = (productId) => {
  return request.get(`${baseUrl}/data/products/${productId}`);
};
export const create = (body, accessToken) => {
  console.log(body);
  return request.post(`${baseUrl}/data/products`, body, true, accessToken);
};
export const edit = (body, accessToken, productId) => {
  return request.put(`${baseUrl}/data/products/${productId}`, body, true, accessToken);
};
export const del = (accessToken, productId) => {
  return request.del(`${baseUrl}/data/products/${productId}`, {}, true, accessToken);
};
export const buy = (accessToken, productId) => {
  return request.post(`${baseUrl}/data/bought`, { productId }, true, accessToken);
};
export const getLikes = (productId) => {
  return request.get(
    `${baseUrl}/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`
  );
};
export const getBuysForUser = (userId, productId) => {
  return request.get(
    `${baseUrl}/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
};
