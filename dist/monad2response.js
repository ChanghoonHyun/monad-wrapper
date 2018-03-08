"use strict";

var findErrorCode = function findErrorCode(either) {
    return either.value.statusCode || 500;
};
var findSuccessCode = function findSuccessCode(e) {
    return e.value ? 200 : 204;
};

module.exports = function (either) {
    var findStatusCode = function findStatusCode(e) {
        return e.isRight() ? findSuccessCode(e) : findErrorCode(e);
    };
    var getBody = function getBody(e) {
        return e.isRight() ? e.value : { message: e.value.message || e.value };
    };

    return {
        statusCode: findStatusCode(either),
        body: getBody(either)
    };
};