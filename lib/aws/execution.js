import R from 'ramda';
import monad from '../monad';

const M = monad();

module.exports = R.curry((method, resource, params) => new Promise((rs) => {
    try {
        resource[method](params, (err, data) =>
        err
            ? rs(M.eitherL(err))
            : rs(M.eitherR(data)));
    } catch (e) {
        rs(M.eitherL(e))
    }
}));

