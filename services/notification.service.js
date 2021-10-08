const { ARTICLES_MODEL } = require("../models");
const startOfDay = require("date-fns/startOfDay");

const findAll = async (req) => {
  try {
    // let data = await ARTICLES_MODEL.find({
    //   deliveryDate: { $gte: startOfDay(new Date()) },
    // });
    let data = await ARTICLES_MODEL.find({});
    if (data.length)
      return { type: "success", message: `articles found`, data };
    else return { type: "bad", message: `articles not found` };
  } catch (error) {
    throw error;
  }
};

const findOne = async ({ body }) => {
  try {
    const date = new Date(body.date);
    let data = await ARTICLES_MODEL.findOne({
      deliveryDate: { $gte: startOfDay(date) },
    });
    if (data) return { type: "success", message: `Found`, data };
    else return { type: "bad", message: `Article not exist!` };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findOne,
  findAll,
};
