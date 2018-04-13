'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _ramdaFantasy = require('ramda-fantasy');

var _ramdaFantasy2 = _interopRequireDefault(_ramdaFantasy);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monad = function monad(errLog, log) {
    var Maybe = _ramdaFantasy2.default.Maybe;
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
    var maybeMap = function maybeMap(func) {
        return _ramda2.default.pipe(func, _ramdaFantasy2.default.Maybe);
    };
    var maybePipe = function maybePipe(args) {
        return _ramda2.default.pipeK.apply(_ramda2.default, [Maybe].concat((0, _toConsumableArray3.default)(_ramda2.default.map(maybeMap, args))));
    };

    return {
        eitherR: eitherR,
        eitherL: eitherL,
        eitherMap: eitherMap,
        ifRight: ifRight,
        ifLeft: ifLeft,
        Maybe: Maybe,
        maybePipe: maybePipe
    };
};

module.exports = monad;