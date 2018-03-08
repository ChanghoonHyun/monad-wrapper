'use strict';

var _monet = require('monet');

var _monet2 = _interopRequireDefault(_monet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monad = function monad(errLog, log) {
    var eitherR = function eitherR(v) {
        return log && log(v) || _monet2.default.Either.Right(v);
    };
    var eitherL = function eitherL(e) {
        return errLog && errLog(e) || _monet2.default.Either.Left(e instanceof Error ? e.message : e);
    };
    var eitherMap = function eitherMap(monad, err) {
        return monad.isRight() ? monad.right() : err || monad.left();
    };
    var ifRight = function ifRight(either, go) {
        return either.isRight() ? go(eitherMap(either)) : either;
    };
    var ifLeft = function ifLeft(either, go) {
        return either.isLeft() ? go(eitherMap(either)) : either;
    };

    return {
        eitherR: eitherR,
        eitherL: eitherL,
        eitherMap: eitherMap,
        ifRight: ifRight,
        ifLeft: ifLeft
    };
};

module.exports = monad;