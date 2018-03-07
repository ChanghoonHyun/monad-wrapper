const M = require('../lib/monad')();
const a = require('axios');

const axios = async (config) => {
    try {
        return M.eitherR(await a(config));
    } catch (err) {
        return M.eitherL(err);
    }
};

axios.get = async (url, config) => {
    try {
        return M.eitherR(await a.get(url, config));
    } catch (err) {
        return M.eitherL(err);
    }
};

axios.post = async (url, config) => {
    try {
        return M.eitherR(await  a.post(url, config));
    } catch (err) {
        return M.eitherL(err);
    }
};

axios.put = async (url, config) => {
    try {
        return M.eitherR(await a.put(url, config));
    } catch (err) {
        return M.eitherL(err);
    }
};

axios.delete = async (url, config) => {
    try {
        return M.eitherR(await a.delete(url, config));
    } catch (err) {
        return M.eitherL(err);
    }
};

module.exports = {
    axios
};
