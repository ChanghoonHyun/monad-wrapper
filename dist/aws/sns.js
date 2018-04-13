'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _monad = require('../monad');

var _monad2 = _interopRequireDefault(_monad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var publish = _ramda2.default.curry(function (sns, params) {
    return new Promise(function (rs) {
        try {
            sns.publish(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var getInstance = function getInstance(AWS, option) {
    var sns = new AWS.SNS(option);
    return {
        publish: publish(sns)
    };
};

module.exports = {
    getInstance: getInstance,
    publish: publish
};