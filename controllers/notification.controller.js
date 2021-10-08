const { setResponse } = require("../helpers");
const { notificationService } = require("../services");

const findAll = async (req, res) => {
    try {
        const data = await notificationService.findAll(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const findOne = async (req, res) => {
    try {
        const data = await notificationService.findOne(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};


module.exports = {
    findAll,
    findOne
};
