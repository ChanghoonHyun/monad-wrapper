import R from 'ramda';
import monad from '../monad';

const M = monad();

const get = R.curry((db, params) => new Promise((rs) => {
    db.get(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
}));

const put = R.curry((db, params) => new Promise((rs) => {
    db.put(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
}));

const scan = R.curry((db, params) => new Promise((rs) => {
    db.scan(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
}));

const batchWriteItem = R.curry((db, params) => new Promise((rs) => {
    db.batchWriteItem(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
}));

const getInstance = (aws) => {
    const docClient = new aws.DynamoDB.DocumentClient();
    const ddb = new aws.DynamoDB();

    const batchWriteItem = batchWriteItem(ddb);
    const put = put(docClient);
    const get = get(docClient);
    const scan = scan(docClient);
    return {
        batchWriteItem,
        put,
        get,
        scan
    };
};

module.exports =  {
    batchWriteItem,
    put,
    get,
    scan
};
