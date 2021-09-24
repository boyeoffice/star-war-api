/* eslint-disable arrow-body-style */
exports.successParser = (status, message, count, data) => {
  return {
    status,
    message,
    count,
    data,
    version: '1.0.0',
  };
};

exports.errorParser = (status, message, data) => {
  return {
    status,
    message,
    data,
    version: '1.0.0',
  };
};
