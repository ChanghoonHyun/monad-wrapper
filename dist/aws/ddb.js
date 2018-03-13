'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _monad = require('../monad');

var _monad2 = _interopRequireDefault(_monad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var get = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        db.get(params, function (err, data) {
            return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
        });
    });
});

var put = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        db.put(params, function (err, data) {
            return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
        });
    });
});

var scan = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        db.scan(params, function (err, data) {
            return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
        });
    });
});

var batchWriteItem = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        db.batchWriteItem(params, function (err, data) {
            return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
        });
    });
});

var getInstance = function getInstance(aws) {
    var docClient = new aws.DynamoDB.DocumentClient();
    var ddb = new aws.DynamoDB();

    var batchWriteItem = batchWriteItem(ddb);
    var put = put(docClient);
    var get = get(docClient);
    var scan = scan(docClient);
    return {
        batchWriteItem: batchWriteItem,
        put: put,
        get: get,
        scan: scan
    };
};

module.exports = {
    batchWriteItem: batchWriteItem,
    put: put,
    get: get,
    scan: scan
};