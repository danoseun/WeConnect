import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import users from '../../mockData/user';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

describe('Test for user route', () => {
  describe('POST /api/v1/auth/signup request route', () => {
    it('It should return 201 status code and create a new user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(users.user1)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.status.should.be.a('string');
          expect(res.body.message).to.equal('Signed up successfully');
          expect(res.body).to.have.property('user');
          done();
        });
    });
  });
  it('It should return 400 status code and return an error message', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.user2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.message.should.be.an('string');
        done();
      });
  });
  describe('POST /api/v1/auth/login request route', () => {
    it('It should return 200 status code and sign user in', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(users.user1)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.status.should.be.a('string');
          expect(res.body.message).to.equal('Logged in successfully');
          done();
        });
    });
  });
  it('It should return 401 status code and return an error message', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(users.user3)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.message.should.be.an('string');
        done();
      });
  });
  describe('GET /api/v1/users request route', () => {
    it('It should return 200 status code and get all users', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .send(users)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body).to.have.property('user');
          done();
        });
    });
  });
});

