'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _monad = require('../monad');

var _monad2 = _interopRequireDefault(_monad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var M = (0, _monad2.default)();

var publicRead = 'public-read';
var publicReadWrite = 'public-read-write';
var privateReadWrite = 'private';
var awsExecRead = 'aws-exec-read';
var authRead = 'authenticated-read';
var bucketOwnerRead = 'bucket-owner-read';
var bucketOwnerFullCtrl = 'bucket-owner-full-control';
var acl = {
    privateReadWrite: privateReadWrite,
    publicRead: publicRead,
    publicReadWrite: publicReadWrite,
    awsExecRead: awsExecRead,
    bucketOwnerRead: bucketOwnerRead,
    bucketOwnerFullCtrl: bucketOwnerFullCtrl,
    authRead: authRead
};

var upload = _ramda2.default.curry(function (s3, params) {
    return new Promise(function (rs) {
        try {
            s3.upload(params, function (e, r) {
                return e ? rs(M.eitherL(e)) : rs(M.eitherR(r));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var getObject = _ramda2.default.curry(function (s3, params) {
    return new Promise(function (rs) {
        try {
            s3.getObject(params, function (e, r) {
                return e ? rs(M.eitherL(e)) : rs(M.eitherR(r));
            });
        } catch (e) {
            rs(M.eitherL(e));
        }
    });
});

var deleteObjects = _ramda2.default.curry(function (s3, params) {
    return new Promise(function (rs) {
        try {
            s3.deleteObjects(params, function (e, r) {
                return e ? rs(M.eitherL(e)) : rs(M.eitherR(r));
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
    var s3 = new aws.S3();

    return {
        acl: acl,
        upload: upload(s3),
        getObject: getObject(s3),
        deleteObjects: deleteObjects(s3)
    };
};

module.exports = {
    acl: acl,
    getInstance: getInstance,
    upload: upload,
    getObject: getObject,
    deleteObjects: deleteObjects
};