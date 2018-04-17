import execute from './execution';

const startQueryExecution = execute('startQueryExecution');
const listNamedQueries = execute('listNamedQueries');
const listQueryExecutions = execute('listQueryExecutions');
const getQueryResults = execute('getQueryResults');
const getQueryExecution = execute('getQueryExecution');
const getNamedQuery = execute('getNamedQuery');
const deleteNamedQuery = execute('deleteNamedQuery');
const createNamedQuery = execute('createNamedQuery');
const batchGetQueryExecution = execute('batchGetQueryExecution');
const batchGetNamedQuery = execute('batchGetNamedQuery');

const getInstance = (AWS, option) => {
    const athena = new AWS.Athena(option);
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
    getInstance,
    startQueryExecution,
    listNamedQueries,
    listQueryExecutions,
    getQueryResults,
    getQueryExecution,
    getNamedQuery,
    deleteNamedQuery,
    createNamedQuery,
    batchGetQueryExecution,
    batchGetNamedQuery
};
