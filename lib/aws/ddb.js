import R from 'ramda';
import monad from '../monad';

const M = monad();

const get = R.curry((db, params) => new Promise((rs) => {
    try {
        db.get(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const put = R.curry((db, params) => new Promise((rs) => {
    try {
        db.put(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const scan = R.curry((db, params) => new Promise((rs) => {
    try {
        db.scan(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const batchWriteItem = R.curry((db, params) => new Promise((rs) => {
    try {
        db.batchWriteItem(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const getInstance = (aws, config) => {
    if (config) {
        aws.config.update(config);
    }

    const docClient = new aws.DynamoDB.DocumentClient();
    const ddb = new aws.DynamoDB();

    return {
        batchWriteItem: batchWriteItem(ddb),
        put: put(docClient),
        get: get(docClient),
        scan: scan(docClient)
    };
};

module.exports =  {
    getInstance,
    batchWriteItem,
    put,
    get,
    scan
};
