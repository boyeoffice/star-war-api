const Validator = require('validatorjs');

const { errorParser } = require('../helpers/parser');

const commentRequest = (req, res, next) => {
  const data = {
    comment: req.body.comment,
  };

  const rules = {
    comment: 'required|string|max:500',
  };

  const validation = new Validator(data, rules);
  if (validation.fails()) {
    return res.status(422).send(errorParser('error', 'Invalid data given', validation.errors.errors));
  }

  return next();
};

module.exports = commentRequest;
