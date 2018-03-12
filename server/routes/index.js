import controllers from '../controllers';
import middlewares from '../middlewares';

const { UserController, BusinessController } = controllers;

const { validation } = middlewares;


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the weConnect api');
  });

  // Signup a new user
  app.post(
    '/api/v1/auth/signup',
    validation.userRequiredInput,
    UserController.registerUser
  );

  app.post(
    '/api/v1/auth/login',
    UserController.loginUser
  );

  app.get(
    '/api/v1/users',
    UserController.getAllUsers
  );

  app.post(
    '/api/v1/businesses',
    validation.businessRequiredInput,
    BusinessController.registerBusiness
  );
};

export default routes;
