const monad = require('./dist/monad');
const wrapper = require('./dist/wrapper');
const m2r = require('./dist/monad2response');
const ddb = require('./dist/aws/ddb');
const s3 = require('./dist/aws/s3');
const sns = require('./dist/aws/sns');
const sqs = require('./dist/aws/sqs');

module.exports.monad = monad;
module.exports.m2r = m2r;
module.exports.axios = wrapper.axios;
module.exports.aws = {
    ddb,
    s3,
    sns,
    sqs
};
