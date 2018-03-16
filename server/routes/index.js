import express from 'express';
import controllers from '../controllers';
import {
  businessRequiredInputs, userRequiredInput,
  reviewRequiredInput
} from '../middlewares';

const { UserController, BusinessController, ReviewController } = controllers;
const { registerUser, loginUser, getAllUsers } = UserController;
const {
  registerBusiness, updateBusinessProfile, deleteBusiness, getOneBusiness,
  getAllBusinesses, filterSearch
} = BusinessController;
const { addReview, getAllReviews } = ReviewController;


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
// Update a business profile
router.put(
  '/businesses/:businessId',
  businessRequiredInputs,
  updateBusinessProfile
);
// Remove a business
router.delete(
  '/businesses/:businessId',
  businessRequiredInputs,
  deleteBusiness
);
// Get a business
router.get(
  '/businesses/:businessId',
  getOneBusiness
);
// Get all businesses
router.get(
  '/businesses',
  filterSearch,
  getAllBusinesses
);
// Add review for a business
router.post(
  '/businesses/:businessId/reviews',
  reviewRequiredInput,
  addReview
);
// Get all reviews for a business
router.get(
  '/businesses/:businessId/reviews',
  getAllReviews
);


export default router;

