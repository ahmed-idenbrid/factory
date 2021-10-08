const { setResponse } = require("../helpers");
const { articleService } = require("../services");

const create = async (req, res) => {
  try {
    // return
    const data = await articleService.create(req);
    setResponse(res, data);
  } catch (error) {
    console.log(error);
    setResponse(res, { type: "serverError" });
  }
};

const findAll = async (req, res) => {
  try {
    const data = await articleService.findAll(req);
    setResponse(res, data);
  } catch (error) {
    setResponse(res, { type: "serverError" });
  }
};

const findOne = async (req, res) => {
  try {
    const data = await articleService.findOne(req);
    setResponse(res, data);
  } catch (error) {
    setResponse(res, { type: "serverError" });
  }
};

const findSingle = async (req, res) => {
  try {
    const data = await articleService.findSingle(req);
    setResponse(res, data);
  } catch (error) {
    setResponse(res, { type: "serverError" });
  }
};

const update = async (req, res) => {
  try {
    const data = await articleService.update(req);
    setResponse(res, data);
  } catch (error) {
    setResponse(res, { type: "serverError" });
  }
};

const purge = async (req, res) => {
  try {
    const data = await articleService.purge(req);
    setResponse(res, data);
  } catch (error) {
    setResponse(res, { type: "serverError" });
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  purge,
  findSingle,
};
