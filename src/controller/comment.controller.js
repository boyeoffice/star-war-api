const requestIp = require('request-ip');

const { successParser, errorParser } = require('../helpers/parser');
const { index, store } = require('../service/comment.service');

exports.comments = async (req, res) => {
  try {
    const { rowCount, rows } = await index();
    res.status(200).send(successParser('success', 'comment was fetched successfully.', rowCount, rows));
  } catch (error) {
    res.status(400).send(errorParser('error', 'An error occurred.', error));
  }
};

exports.createComment = async (req, res) => {
  try {
    const ip = requestIp.getClientIp(req);
    const params = req.body;
    params.ip = ip;
    await store(params);
    const count = 0;
    console.log(ip);

    res.status(200).send(successParser('success', 'comment was created successfully.', count, null));
  } catch (error) {
    res.status(400).send(errorParser('error', 'An error occurred.', error));
  }
};
