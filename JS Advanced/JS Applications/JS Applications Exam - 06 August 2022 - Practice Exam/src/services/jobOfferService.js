import * as request from "./requester.js";

const baseUrl = "http://localhost:3030";

export const getAll = () => {
  return request.get(`${baseUrl}/data/offers?sortBy=_createdOn%20desc`).then((res) => res);
};
export const create = (body, accessToken) => {
  return request.post(`${baseUrl}/data/offers`, body, true, accessToken).then((offer) => {
    return offer;
  });
};

export const totalApplications = (offerId) => {
  return request.get(
    `${baseUrl}/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
};

export const applicationsForUser = (offerId, userId) => {
  return request.get(
    `${baseUrl}/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
};

export const edit = (body, accessToken, id) => {
  return request.put(`${baseUrl}/data/offers/${id}`, body, true, accessToken).then((offer) => {
    return offer;
  });
};
export const del = (accessToken, id) => {
  return request.del(`${baseUrl}/data/offers/${id}`, {}, true, accessToken).then((offer) => {
    return offer;
  });
};

export const apply = (offerId, accessToken) => {
  return request.post(`${baseUrl}/data/applications`, { offerId }, true, accessToken);
};
export const getOne = (offerId) => request.get(`${baseUrl}/data/offers/${offerId}`);
