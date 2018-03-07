const should = require('should');
const W = require('../lib/wrapper');

describe('lib/wrapper', () => {

    describe('config', () => {
        
        it('Right', async () => {
            const result = await W.axios({
                method: 'get',
                url: 'http://google.com'
            });
            should.exist(result);
            should.equal(result.isRight(), true);
        })

        it('Left', async () => {
            const result = await W.axios({
                method: 'delete',
                url: 'http://google.com'
            });
            should.exist(result);
            should.equal(result.isRight(), false);
        })

    })

    describe('get', () => {
        
        it('Right', async () => {
            const result = await W.axios.get('http://google.com');
            should.exist(result);
            should.equal(result.isRight(), true);
        })

        it('Left', async () => {
            const result = await W.axios.get('http://111');
            should.exist(result);
            should.equal(result.isRight(), false);
        })

    })

});
