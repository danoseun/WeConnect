import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../app';

const { should, assert, expect } = chai;
should();

chai.use(chaiHttp);

describe('Test for index route', () => {
  describe('GET request to undefined route', () => {
    it('It should return page not found', (done) => {
      chai.request(app)
        .get('/hgjhgjg')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Sorry! Page not found');
          done();
        });
    });
  });
});
