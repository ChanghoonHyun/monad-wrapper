'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _monad = require('../monad');

var _monad2 = _interopRequireDefault(_monad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var get = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        try {
            db.get(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var put = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        try {
            db.put(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var scan = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        try {
            db.scan(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var batchWriteItem = _ramda2.default.curry(function (db, params) {
    return new Promise(function (rs) {
        try {
            db.batchWriteItem(params, function (err, data) {
                return err ? rs(M.eitherL(err)) : rs(M.eitherR(data));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var getInstance = function getInstance(aws, config) {
    if (config) {
        aws.config.update(config);
    }

    var docClient = new aws.DynamoDB.DocumentClient();
    var ddb = new aws.DynamoDB();

    return {
        batchWriteItem: batchWriteItem(ddb),
        put: put(docClient),
        get: get(docClient),
        scan: scan(docClient)
    };
};

module.exports = {
    getInstance: getInstance,
    batchWriteItem: batchWriteItem,
    put: put,
    get: get,
    scan: scan
};