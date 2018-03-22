import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import reviews from '../../mockData/review';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

describe('Test for review routes', () => {
  describe('POST /api/v1/businesses/:businessId/reviews request route', () => {
    it('It should return 201 status code and create a review for a business', (done) => {
      chai.request(app)
        .post('/api/v1/businesses/2/reviews')
        .send({
          id: 1,
          businessId: 1,
          content: 'The best fumigators in town!',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Review added successfully');
          expect(res.body).to.have.property('review');
          done();
        });
    });
  });
  it('It should return 404 staus code for business not found in the database', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/15/reviews')
      .send({
        id: 15,
        businessId: 15,
        content: 'Lorem ipsum dolor Jones'
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Business not found');
        done();
      });
  });
  it('It should return 400 status code and return and an error message for empty content', (done) => {
    chai.request(app)
      .post('/api/v1/businesses/3/reviews')
      .send({
        id: 4,
        businessId: 5,
        content: null
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.message.should.be.an('string');
        done();
      });
  });
  describe('GET /api/v1/businesses/2/reviews request route', () => {
    it('It should return 200 status code and get all reviews for a business', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/2/reviews')
        .send(reviews.review1)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Success, review found');
          expect(res.body).to.have.property('business');
          expect(res.body).to.have.property('reviews');
          done();
        });
    });
  });
  it('It should return 404 for a business not found', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/15/reviews')
      .send(reviews.review1)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Business not found');
        done();
      });
  });
});

