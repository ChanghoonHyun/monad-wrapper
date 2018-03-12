'use strict';

var _ramdaFantasy = require('ramda-fantasy');

var _ramdaFantasy2 = _interopRequireDefault(_ramdaFantasy);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monad = function monad(errLog, log) {
    var eitherR = function eitherR(v) {
        return log && log(v) || _ramdaFantasy2.default.Either.Right(v);
    };
    var eitherL = function eitherL(e) {
        return errLog && errLog(e) || _ramdaFantasy2.default.Either.Left(e instanceof Error ? e.message : e);
    };
    var eitherMap = function eitherMap(monad, err) {
        return monad.isRight ? monad.value : err || monad.value;
    };
    var ifRight = _ramda2.default.curry(function (go, either) {
        return either.isRight ? go(eitherMap(either)) : either;
    });
    var ifLeft = _ramda2.default.curry(function (go, either) {
        return either.isLeft ? go(eitherMap(either)) : either;
    });

    return {
        eitherR: eitherR,
        eitherL: eitherL,
        eitherMap: eitherMap,
        ifRight: ifRight,
        ifLeft: ifLeft
    };
};

module.exports = monad;