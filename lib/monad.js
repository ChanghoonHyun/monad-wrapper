import M from 'ramda-fantasy';
import R from 'ramda';

const monad = (errLog, log) => {
    const Maybe = M.Maybe;
    const eitherR = v => (log && log(v)) || M.Either.Right(v);
    const eitherL = e => (errLog && errLog(e)) || M.Either.Left(e instanceof Error ? e.message : e);
    const eitherMap = (monad, err) => monad.isRight
        ? monad.value
        : err || monad.value;
    const ifRight = R.curry((go, either) => either.isRight ? go(eitherMap(either)) : either);
    const ifLeft = R.curry((go, either) => either.isLeft ? go(eitherMap(either)) : either);
    const maybeMap = func => R.pipe(func, M.Maybe);
    const maybePipe = (args) => R.pipeK(Maybe, ...R.map(maybeMap, args));

    return {
        eitherR,
        eitherL,
        eitherMap,
        ifRight,
        ifLeft,
        Maybe,
        maybePipe
    };
};

module.exports = monad;
