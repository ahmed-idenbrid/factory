const { userHelper } = require('../helpers')

const signIn = async ({ body }) => {
    try {
        const { username, password } = body;
        console.log(username, password)
        if (!username || !password) {
            return {
                type: "bad",
                message: "Kindly provide complete credentials to login",
                data: {},
            };
        }

        if (username == 'admin@admin.com' && password == 'admin@123') {
            return {
                type: "success",
                message: "You are logged In Successfully",
                data: { token: `Bearer ${await userHelper.generarteToken(username)}`, status: true },
            };
        } else {
            return {
                type: "bad",
                message: "Invalid Credetials...",
                data: {},
            };
        }
    } catch (error) {
        // console.log('Error', error);
        throw error;
    }
};

module.exports = {
    signIn
}