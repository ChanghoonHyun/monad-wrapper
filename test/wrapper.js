const should = require('should');
const axios = require('../index').axios;

describe('lib/wrapper', () => {

    describe('config', () => {
        
        it('Right', async () => {
            const result = await axios({
                method: 'get',
                url: 'http://google.com'
            });
            should.exist(result);
            should.equal(result.isRight, true);
        })

        it('Left', async () => {
            const result = await axios({
                method: 'delete',
                url: 'http://google.com'
            });
            should.exist(result);
            should.equal(result.isRight, false);
        })

    })

    describe('get', () => {
        
        it('Right', async () => {
            const result = await axios.get('http://google.com');
            should.exist(result);
            should.equal(result.isRight, true);
        })

        it('Left', async () => {
            const result = await axios.get('http://111');
            should.exist(result);
            should.equal(result.isRight, false);
        })

    })

});
