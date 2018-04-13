import R from 'ramda';
import monad from '../monad';

const M = monad();

const publish = R.curry((sns, params) => new Promise((rs) => {
    try {
        sns.publish(params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

const getInstance = (AWS, option) => {
    const sns = new AWS.SNS(option);
    return {
        publish: publish(sns)
    };
};

module.exports =  {
    getInstance,
    publish
};
