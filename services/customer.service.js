const { CUSTOMERS_MODEL } = require("../models");

const create = async ({ body }) => {
  try {
    const reqData = body;
    console.log("reqData ", reqData);
    const user = await CUSTOMERS_MODEL.findOne({ name: reqData.name });
    if (!user) {
      const data = await CUSTOMERS_MODEL.create(reqData);
      return {
        type: "success",
        message: `${data.name.toUpperCase()} is created successfully`,
        data,
      };
    }
    return { type: "bad", message: `${reqData.name} Customer exist!` };
  } catch (error) {
    throw error;
  }
};

const findOne = async ({ params }) => {
  try {
    const data = await CUSTOMERS_MODEL.findOne({ _id: params.customerId });
    if (data)
      return {
        type: "success",
        message: `${data.name.toUpperCase()} found`,
        data,
      };
    else
      return {
        type: "bad",
        message: `${data.name.toUpperCase()} Customer not exist!`,
      };
  } catch (error) {
    throw error;
  }
};

const findAll = async (req) => {
  try {
    const data = await CUSTOMERS_MODEL.find({});
    if (data.length)
      return { type: "success", message: `Customer found`, data };
    else return { type: "bad", message: `Customer not found` };
  } catch (error) {
    throw error;
  }
};

const update = async ({ params, body }) => {
  try {
    const _id = params.customerId;
    body.updatedAt = new Date();
    const data = await CUSTOMERS_MODEL.findByIdAndUpdate(_id, body, {
      new: true,
    });
    if (data)
      return {
        type: "success",
        message: `${data.name.toUpperCase()} Customer Updated`,
        data,
      };
    else return { type: "bad", message: `Customer not found` };
  } catch (error) {
    throw error;
  }
};

const purge = async ({ params }) => {
  try {
    const _id = params.customerId;
    const data = await CUSTOMERS_MODEL.deleteOne({ _id });
    if (data.n == 1) {
      return { type: "success", message: `Customer Deleted`, data };
    } else {
      return { type: "bad", message: `Customer not found`, data };
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
};
