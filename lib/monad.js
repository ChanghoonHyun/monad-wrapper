import m from 'monet';

const monad = (errLog, log) => {
    const eitherR = v =>(log && log(v)) || m.Either.Right(v);
    const eitherL = e => (errLog && errLog(e)) || m.Either.Left(e instanceof Error ? e.message : e);
    const eitherMap = (monad, err) => monad.isRight()
        ? monad.right()
        : err || monad.left();
    const ifRight = (either, go) => either.isRight() ? go(eitherMap(either)) : either;
    const ifLeft = (either, go) => either.isLeft() ? go(eitherMap(either)) : either;

    return {
        eitherR,
        eitherL,
        eitherMap,
        ifRight,
        ifLeft
    };
};

module.exports = monad;
