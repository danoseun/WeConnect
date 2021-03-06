import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import businesses from '../../mockData/business';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

describe('Test for business route', () => {
  describe('POST /api/v1/businesses request route', () => {
    it('It should return 201 status code and create a new business', (done) => {
      chai.request(app)
        .post('/api/v1/businesses')
        .send({
          id: 1,
          businessName: 'Kulikuli and Sons Limited',
          description: 'We take you to heaven and back',
          email: 'kososhi@gmail.com',
          location: 'Kaduna',
          category: 'Hospitality',
          phoneNumber: '07033288342'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.status.should.be.a('string');
          expect(res.body.message).to.equal('Business created successfully');
          expect(res.body).to.have.property('business');
          done();
        });
    });
  });
  it('It should return 400 status code and return an error message for empty category', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send(businesses.business2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.message.should.be.an('string');
        done();
      });
  });
  it('It should return 400 status code and return an error message for empty location', (done) => {
    chai.request(app)
      .post('/api/v1/businesses')
      .send(businesses.business3)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.message.should.be.an('string');
        done();
      });
  });
  describe('PUT /api/v1/businesses/:businessId request route', () => {
    it('It should return 201 status code and update business', (done) => {
      chai.request(app)
        .put('/api/v1/businesses/2')
        .send({
          id: 1,
          businessName: 'Kulikuli and Sons Limited',
          description: 'We take you to heaven and back',
          email: 'kososhi@gmail.com',
          location: 'Kaduna',
          category: 'Hospitality',
          phoneNumber: '07033288342'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Business profile updated successfully');
          expect(res.body).to.have.property('business');
          done();
        });
    });
  });
  it('It should return 404 status code and not found for a business not in the database', (done) => {
    chai.request(app)
      .put('/api/v1/businesses/20')
      .send({
        id: 3,
        businessName: 'Kuliboy',
        description: 'Great opportunity',
        email: 'Tawa@gmail.com',
        location: 'Kojotown',
        category: 'Eduland',
        phoneNumber: '08032371362'
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Business not found');
        done();
      });
  });
  describe('DELETE /api/v1/businesses/:businessId request route', () => {
    it('It should return 200 status code and delete business', (done) => {
      chai.request(app)
        .delete('/api/v1/businesses/1')
        .send({
          id: 1,
          businessName: 'Kulikuli and Sons Limited',
          description: 'We take you to heaven and back',
          email: 'kososhi@gmail.com',
          location: 'Kaduna',
          category: 'Hospitality',
          phoneNumber: '07033288342'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body.message).to.equal('Business deleted successfully');
          done();
        });
    });
  });
  it('It should return 404 status code and not found for a business not in the database', (done) => {
    chai.request(app)
      .delete('/api/v1/businesses/20')
      .send({
        id: 20,
        businessName: 'Kuliboy',
        description: 'Great opportunity',
        email: 'Tawa@gmail.com',
        location: 'Kojotown',
        category: 'Eduland',
        phoneNumber: '08032371362'
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Business not found');
        done();
      });
  });
  describe('GET /api/v1/businesses/:businessId request route', () => {
    it('It should return 200 status code and return business', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/3')
        .send({
          id: 3,
          businessName: 'Kulikuli and Sons Limited',
          description: 'We take you to heaven and back',
          email: 'kososhi@gmail.com',
          location: 'Kaduna',
          category: 'Hospitality',
          phoneNumber: '07033288342'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body).to.have.property('business');
          done();
        });
    });
  });
  it('It should return 404 status code and not found for a business not in the database', (done) => {
    chai.request(app)
      .get('/api/v1/businesses/20')
      .send({
        id: 20,
        businessName: 'Kuliboy',
        description: 'Great opportunity',
        email: 'Tawa@gmail.com',
        location: 'Kojotown',
        category: 'Eduland',
        phoneNumber: '08032371362'
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('Business not found');
        done();
      });
  });
  describe('GET /api/v1/businesses request route', () => {
    it('It should return 200 status code and return all businesses', (done) => {
      chai.request(app)
        .get('/api/v1/businesses')
        .send({
          id: 1,
          businessName: 'Kulikuli and Sons Limited',
          description: 'We take you to heaven and back',
          email: 'kososhi@gmail.com',
          location: 'Kaduna',
          category: 'Hospitality',
          phoneNumber: '07033288342'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          expect(res.body.status).to.equal('Success');
          expect(res.body).to.have.property('businesses');
          expect(res.body).to.have.property('reviews');
          done();
        });
    });
  });
  it('It should return 406 if the location and category does not exist', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=location&category=category')
      .send({
        id: 4,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Qwerty',
        category: 'Hiop',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        expect(res.body.message).to.equal('The location and category matching does not exist');
        done();
      });
  });
  it('It should return 200 if the location matches', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=Kaduna')
      .send({
        id: 5,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Kaduna',
        category: 'Pelenge',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        expect(res.body).to.have.property('locations');
        done();
      });
  });
  it('It should return 200 if the category matches', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?category=Hospitality')
      .send({
        id: 5,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Kaduna',
        category: 'Hospitality',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        expect(res.body).to.have.property('categories');
        done();
      });
  });
  it('It should return 406 if the location matches but category does not match', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=Lagos&category=category')
      .send({
        id: 4,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Qwerty',
        category: 'Hiop',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        res.body.message.should.be.a('string');
        done();
      });
  });
  it('It should return 406 if the category matches but location does not match', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=Beirut&category=Hospitality')
      .send({
        id: 4,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Beirut',
        category: 'Hospitality',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(406);
        res.body.should.be.an('object');
        expect(res.body.status).to.equal('Fail');
        res.body.message.should.be.a('string');
        done();
      });
  });
  it('It should return 200 if the category and location matches', (done) => {
    chai.request(app)
      .get('/api/v1/businesses?location=Kaduna&category=Hospitality')
      .send({
        id: 5,
        businessName: 'Kulikuli and Sons Limited',
        description: 'We take you to heaven and back',
        email: 'kososhi@gmail.com',
        location: 'Kaduna',
        category: 'Hospitality',
        phoneNumber: '07033288342'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        expect(res.body).to.have.property('filteredArray');
        done();
      });
  });
});
