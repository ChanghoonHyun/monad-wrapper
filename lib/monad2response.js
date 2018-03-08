const findErrorCode = either => either.value.statusCode || 500;
const findSuccessCode = e => e.value ? 200 : 204;

module.exports = (either) => {
    const findStatusCode = e => e.isRight() ? findSuccessCode(e) : findErrorCode(e);
    const getBody = e => e.isRight() ? e.value : { message: e.value.message || e.value };

    return {
        statusCode: findStatusCode(either),
        body: getBody(either)
    };
};