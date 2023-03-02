const requester = (method, url, data, authReq, accessToken) => {
  let options = {};
  if (method !== "GET") {
    options.method = method;
    if (authReq) {
      options.headers = {
        "Content-Type": "application/json",
        "X-Authorization": accessToken,
      };
    } else {
      options.headers = {
        "Content-Type": "application/json",
      };
    }
    options.body = JSON.stringify(data);
  }
  return fetch(url, options).then((res) => res.json());
};

export const get = requester.bind({}, "GET");
export const post = requester.bind({}, "POST");
export const put = requester.bind({}, "PUT");
export const patch = requester.bind({}, "PATCH");
export const del = requester.bind({}, "DELETE");
