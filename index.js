const monad = require('./dist/monad');
const wrapper = require('./dist/wrapper');
const m2r = require('./dist/monad2response');

module.exports.monad = monad;
module.exports.m2r = m2r;
module.exports.axios = wrapper.axios;
