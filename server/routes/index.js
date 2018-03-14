import express from 'express';
import controllers from '../controllers';
import { businessRequiredInputs, userRequiredInput } from '../middlewares';

const { UserController, BusinessController } = controllers;
const { registerUser, loginUser, getAllUsers } = UserController;
const { registerBusiness, updateBusinessProfile } = BusinessController;


const router = express.Router();

// Signup a new user
router.post(
  '/auth/signup',
  userRequiredInput,
  registerUser
);
// Login a user
router.post(
  '/auth/login',
  loginUser
);
// Get all users
router.get(
  '/users',
  getAllUsers
);
// Create a business
router.post(
  '/businesses',
  businessRequiredInputs,
  registerBusiness
);


export default router;

