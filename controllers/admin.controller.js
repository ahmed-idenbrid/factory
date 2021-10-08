const { setResponse } = require("../helpers");
const { adminService } = require("../services");

const singnIn = async (req, res) => {
    try {
        const data = await adminService.signIn(req);
        setResponse(res, data);
    } catch (error) {
        console.log(error);
        setResponse(res, { type: "serverError" });
    }
};


module.exports = {
    singnIn
}