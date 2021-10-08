const { ARTICLES_MODEL } = require("../models");

const create = async ({ body }) => {
  try {
    const reqData = body;

    const data = await ARTICLES_MODEL.create(reqData);
    if (data) {
      return { type: "success", message: `Article created successfully`, data };
    } else {
      return { type: "bad", message: `Article already exist!` };
    }
  } catch (error) {
    throw error;
  }
};

const findOne = async ({ body, params }) => {
  try {
    const query = { userRef: params.userId };
    console.log("Body Query...", query);
    const data = await ARTICLES_MODEL.find(query);
    if (data.length) return { type: "success", message: `Found`, data };
    else return { type: "bad", message: `Article not exist!` };
  } catch (error) {
    throw error;
  }
};

const findSingle = async ({ params }) => {
  try {
    const query = { _id: params.userId };
    console.log("Body Query...", query);
    const data = await ARTICLES_MODEL.findOne(query);
    if (data) return { type: "success", message: `Found`, data };
    else return { type: "bad", message: `Article not exist!` };
  } catch (error) {
    throw error;
  }
};

const findAll = async (req) => {
  try {
    let data = await ARTICLES_MODEL.find({});
    if (data.length)
      return { type: "success", message: `articles found`, data };
    else return { type: "bad", message: `articles not found` };
  } catch (error) {
    throw error;
  }
};

const update = async ({ params, body }) => {
  try {
    const _id = params.articleId;
    const data = await ARTICLES_MODEL.findByIdAndUpdate(_id, body, {
      new: true,
    });
    if (data) return { type: "success", message: `article Updated`, data };
    else return { type: "bad", message: `articles not found` };
  } catch (error) {
    throw error;
  }
};

const purge = async ({ params }) => {
  try {
    const _id = params.articleId;
    const data = await ARTICLES_MODEL.deleteOne({ _id });
    if (data.n == 1) {
      return { type: "success", message: `Article Deleted`, data };
    } else {
      return { type: "bad", message: `Article not found`, data };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  update,
  purge,
  findSingle,
};
