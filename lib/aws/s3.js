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
    s3.upload(params, (e, r) =>
        e
            ? rs(M.eitherL(e))
            : rs(M.eitherR(r))
    );
}));

const getObject = R.curry((s3, params) => new Promise((rs) => {
    s3.getObject(params, (e, r) =>
        e
            ? rs(M.eitherL(e))
            : rs(M.eitherR(r))
    );
}));

const deleteObjects = R.curry((s3, params) => new Promise((rs) => {
    s3.deleteObjects(params, (e, r) =>
        e
            ? rs(M.eitherL(e))
            : rs(M.eitherR(r))
    );
}));

const getInstance = (aws, config) => {
    aws.config.update(config);
    const s3 = new aws.S3();
    const upload = upload(s3);
    const getObject = getObject(s3);
    const deleteObjects = deleteObjects(s3);

    return {
        upload,
        getObject,
        deleteObjects
    };
};

module.exports = {
    acl,
    getInstance,
    upload,
    getObject,
    deleteObjects
};
