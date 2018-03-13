import R from 'ramda';
import monad from '../monad';

const M = monad();

const publicRead = 'public-read';
const publicReadWrite = 'public-read-write';
const privateReadWrite = 'private';
const awsExecRead = 'aws-exec-read';
const authRead = 'authenticated-read';
const bucketOwnerRead = 'bucket-owner-read';
const bucketOwnerFullCtrl = 'bucket-owner-full-control';
const acl = {
    privateReadWrite,
    publicRead,
    publicReadWrite,
    awsExecRead,
    bucketOwnerRead,
    bucketOwnerFullCtrl,
    authRead
};

const upload = R.curry((s3, params) => new Promise((rs) => {
    try {
        s3.upload(params, (e, r) =>
            e
                ? rs(M.eitherL(e))
                : rs(M.eitherR(r))
        );
    } catch (e) {
        rs(M.eitherL(e));
    }
}));

const getObject = R.curry((s3, params) => new Promise((rs) => {
    try {
        s3.getObject(params, (e, r) =>
            e
                ? rs(M.eitherL(e))
                : rs(M.eitherR(r))
        );
    } catch (e) {
        rs(M.eitherL(e));
    }
}));

const deleteObjects = R.curry((s3, params) => new Promise((rs) => {
    try {
        s3.deleteObjects(params, (e, r) =>
            e
                ? rs(M.eitherL(e))
                : rs(M.eitherR(r))
        );
    } catch (e) {
        rs(M.eitherL(e));
    }
}));

const getInstance = (aws, config) => {
    if (config) {
        aws.config.update(config);
    }
    const s3 = new aws.S3();

    return {
        upload: upload(s3),
        getObject: getObject(s3),
        deleteObjects: deleteObjects(s3)
    };
};

module.exports = {
    acl,
    getInstance,
    upload,
    getObject,
    deleteObjects
};
