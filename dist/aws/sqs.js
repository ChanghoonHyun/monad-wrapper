'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _monad = require('../monad');

var _monad2 = _interopRequireDefault(_monad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var receiveMessage = _ramda2.default.curry(function (sqs, params) {
    return new Promise(function (rs) {
        try {
            sqs.receiveMessage(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var deleteMessage = _ramda2.default.curry(function (sqs, params) {
    return new Promise(function (rs) {
        try {
            sqs.deleteMessage(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var getInstance = function getInstance(aws, option) {
    var sqs = new AWS.SQS(option);
    return {
        receiveMessage: receiveMessage(sqs),
        deleteMessage: deleteMessage(sqs)
    };
};

module.exports = {
    getInstance: getInstance,
    receiveMessage: receiveMessage,
    deleteMessage: deleteMessage
};