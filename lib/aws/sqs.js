import R from 'ramda';
import monad from '../monad';

const M = monad();

const receiveMessage = R.curry((sqs, params) => new Promise((rs) => {
    try {
        sqs.receiveMessage(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const deleteMessage = R.curry((sqs, params) => new Promise((rs) => {
    try {
        sqs.deleteMessage(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const getInstance = (aws, option) => {
    const sqs = new AWS.SQS(option);
    return {
        receiveMessage: receiveMessage(sqs),
        deleteMessage: deleteMessage(sqs)
    };
};

module.exports =  {
    getInstance,
    receiveMessage,
    deleteMessage
};
