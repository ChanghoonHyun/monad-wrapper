'use strict';

var _execution = require('./execution');

var _execution2 = _interopRequireDefault(_execution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startQueryExecution = (0, _execution2.default)('startQueryExecution');
var listNamedQueries = (0, _execution2.default)('listNamedQueries');
var listQueryExecutions = (0, _execution2.default)('listQueryExecutions');
var getQueryResults = (0, _execution2.default)('getQueryResults');
var getQueryExecution = (0, _execution2.default)('getQueryExecution');
var getNamedQuery = (0, _execution2.default)('getNamedQuery');
var deleteNamedQuery = (0, _execution2.default)('deleteNamedQuery');
var createNamedQuery = (0, _execution2.default)('createNamedQuery');
var batchGetQueryExecution = (0, _execution2.default)('batchGetQueryExecution');
var batchGetNamedQuery = (0, _execution2.default)('batchGetNamedQuery');

var getInstance = function getInstance(AWS, option) {
    var athena = new AWS.Athena(option);
    return {
        startQueryExecution: startQueryExecution(athena),
        listNamedQueries: listNamedQueries(athena),
        listQueryExecutions: listQueryExecutions(athena),
        getQueryResults: getQueryResults(athena),
        getQueryExecution: getQueryExecution(athena),
        getNamedQuery: getNamedQuery(athena),
        deleteNamedQuery: deleteNamedQuery(athena),
        createNamedQuery: createNamedQuery(athena),
        batchGetQueryExecution: batchGetQueryExecution(athena),
        batchGetNamedQuery: batchGetNamedQuery(athena)
    };
};

module.exports = {
    getInstance: getInstance,
    startQueryExecution: startQueryExecution,
    listNamedQueries: listNamedQueries,
    listQueryExecutions: listQueryExecutions,
    getQueryResults: getQueryResults,
    getQueryExecution: getQueryExecution,
    getNamedQuery: getNamedQuery,
    deleteNamedQuery: deleteNamedQuery,
    createNamedQuery: createNamedQuery,
    batchGetQueryExecution: batchGetQueryExecution,
    batchGetNamedQuery: batchGetNamedQuery
};