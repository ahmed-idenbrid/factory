const { customerService } = require('../services');
const { setResponse } = require('../helpers/response.helper');

const create = async (req, res) => {
    try {
        console.log('req.body', req.body)
        const data = await customerService.create(req);
        data.password = undefined;
        setResponse(res, data)
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
};

const signIn = async (req, res) => {
    try {
        console.log(req.body)
        const data = await customerService.signIn(req);
        setResponse(res, data)
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
}

const findAll = async (req, res) => {
    try {
        const data = await customerService.findAll();
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
};

const findOne = async (req, res) => {
    try {
        const data = await customerService.findOne(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
}
const update = async (req, res) => {
    try {
        console.log(req.params, req.body)
        const data = await customerService.update(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
}
const purge = async (req, res) => {
    try {
        const data = await customerService.purge(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: 'serverError' })
    }
}

module.exports = { create, signIn, findAll, findOne, update, purge }