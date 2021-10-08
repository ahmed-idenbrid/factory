const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hashPassword = (password) => new Promise(async (resolve, reject) => {
    try {
        resolve(await bcrypt.hash(password, 12))
    } catch (error) {
        reject(error)
    }
});

const comparewPassword = (clientPass, dbPass) => new Promise(async (resolve, reject) => {
    try {
        resolve(await bcrypt.compareSync(clientPass, dbPass))
    } catch (error) {
        reject(error)
    }
});

const formateData = (data) => {
    data.dob = new Date(data.dob);
    data.contact = parseInt(data.contact);
    return data;
};

const generarteToken = (user) => {
    return jwt.sign({
        userName: user
    }, 'This is very Secret', { expiresIn: '1h' });
};

module.exports = {
    hashPassword,
    comparewPassword,
    formateData,
    generarteToken
};