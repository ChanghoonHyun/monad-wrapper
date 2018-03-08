const should = require('should');
const R = require('ramda');
const MW = require('../index');
const m2r = MW.m2r;
const M = MW.monad();

describe('lib/monad2response', () => {

    it('200 response', async () => {
        const either = M.eitherR({ test: true });
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, 200);
        should.equal(result.body.test, true);
    });

    it('204 response when undefined', async () => {
        const either = M.eitherR();
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, 204);
        should.equal(result.body, undefined);
    });

    it('204 response when null', async () => {
        const either = M.eitherR(null);
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, 204);
        should.equal(result.body, undefined);
    });

    it('401 response', async () => {
        const statusCode = 401;
        const message = 'unauthenticated';
        const either = M.eitherL({ statusCode, message });
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, statusCode);
        should.equal(result.body.message, message);
    });

    it('500 response', async () => {
        const statusCode = 500;
        const message = 'internal error';
        const either = M.eitherL({ statusCode, message });
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, statusCode);
        should.equal(result.body.message, message);
    });

    it('500 response when there is no statusCode', async () => {
        const message = 'internal error';
        const either = M.eitherL({ message });
        const result = m2r(either);

        should.exist(result);
        should.equal(result.statusCode, 500);
        should.equal(result.body.message, message);
    });

    it('500 response when there is string', async () => {
        const message = 'internal error';
        const either = M.eitherL(message);
        const result = m2r(either);
        
        should.exist(result);
        should.equal(result.statusCode, 500);
        should.equal(result.body.message, message);
    });

});
