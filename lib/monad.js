import m from 'ramda-fantasy';
import R from 'ramda';

const monad = (errLog, log) => {
    const eitherR = v => (log && log(v)) || m.Either.Right(v);
    const eitherL = e => (errLog && errLog(e)) || m.Either.Left(e instanceof Error ? e.message : e);
    const eitherMap = (monad, err) => monad.isRight
        ? monad.value
        : err || monad.value;
    const ifRight = R.curry((go, either) => either.isRight ? go(eitherMap(either)) : either);
    const ifLeft = R.curry((go, either) => either.isLeft ? go(eitherMap(either)) : either);

    return {
        eitherR,
        eitherL,
        eitherMap,
        ifRight,
        ifLeft
    };
};

module.exports = monad;
