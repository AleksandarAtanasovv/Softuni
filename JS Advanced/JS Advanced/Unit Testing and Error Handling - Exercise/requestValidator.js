function requestValidator(req) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messagePattern = /^([^<>\\&'"]*)$/g;
  const uriPattern = /^([a-zA-Z0-9\.]+|\*)$/gm;
  const { method, uri, version, message } = req;
  if (!methods.includes(method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!versions.includes(version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (message === undefined || !messagePattern.test(message)) {
    throw new Error("Invalid request header: Invalid Message");
  }
  if (!uri || !uriPattern.test(uri)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  return req;
}
console.log(
  requestValidator({
    method: "POST",
    version: "HTTP/2.0",
    uri: "*",
    message: "rm",
  })
);
