const should = require('should');
const R = require('ramda');
const monad = require('../index').monad;

describe('lib/monad', () => {

    describe('eitherR', () => {

        it('wrap', async () => {
            const log = v => should.exist(v);
            const M = monad(null, log);
            
            const result = M.eitherR({ test: true });
            should.exist(result);
            should.equal(result.isRight(), true);
            should.equal(result.isRightValue, true);
            should.equal(result.value.test, true);
        });

    })

    describe('eitherL', () => {
        
        it('wrap object', async () => {
            const M = monad();
            
            const result = M.eitherL({ test: true });
            should.exist(result);
            should.equal(result.isLeft(), true);
            should.equal(result.isRightValue, false);
            should.equal(result.value.test, true);
        
        });

        it('wrap string', async () => {
            const M = monad();
            
            const result = M.eitherL('test');
            should.exist(result);
            should.equal(result.isLeft(), true);
            should.equal(result.isRightValue, false);
            should.equal(result.value, 'test');
        
        });

        it('wrap Error', async () => {
            const M = monad();
            
            const result = M.eitherL(new Error('test'));
            should.exist(result);
            should.equal(result.isLeft(), true);
            should.equal(result.isRightValue, false);
            should.equal(result.value, 'test');
        
        });

    })

    describe('eitherMap', () => {

        it('map Right', async () => {
            const M = monad();
            const r = M.eitherR({ test: true });
            const result = M.eitherMap(r);
            
            should.exist(result);
            should.equal(result.test, true);
        })
        
        it('map Left', async () => {
            const M = monad();
            const r = M.eitherL(new Error('test'));
            const result = M.eitherMap(r);
            
            should.exist(result);
            should.equal(result, 'test');
        })

    })

    describe('ifRight', () => {

        it('Right', async () => {
            const M = monad();
            const r = M.eitherR({ test: true });
            const result = M.ifRight(r, R.identity);
            
            should.exist(result);
            should.equal(result.test, true);
        })
        
        it('Left', async () => {
            const M = monad();
            const r = M.eitherL(new Error('test'));
            const result = M.ifLeft(r, R.identity);
            
            should.exist(result);
            should.equal(result, 'test');
        })

    })

});
