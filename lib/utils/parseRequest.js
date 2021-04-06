module.exports = rawRequest => {
  const body = rawRequest.split('\r\n\r\n')[1];
  const method = rawRequest.split(' ')[0];
  const path = rawRequest.split(' ')[1];

  if(!body) return {
    method, 
    path
  };
  return {
    method,
    path,
    body
  };
};
