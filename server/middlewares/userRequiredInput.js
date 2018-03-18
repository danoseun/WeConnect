/**
 * Checks for the required input fields
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - Calls the next route handler
 * @returns {object} JSON object representing the failure message
 */
const userRequiredInput = (req, res, next) => {
  req.checkBody({
    firstName: {
      notEmpty: {
        options: true,
        errorMessage: 'First name is required'
      },
      isLength: {
        options: [{ min: 2 }],
        errorMessage: 'First name length should be at least 2'
      },
      matches: {
        options: /^[a-zA-Z]+$/,
        errorMessage: 'First name should be alphabets only'
      }
    },
    lastName: {
      notEmpty: {
        options: true,
        errorMessage: 'Last name is required'
      },
      isLength: {
        options: [{ min: 2 }],
        errorMessage: 'Last name should be at least 2'
      },
      matches: {
        options: /^[a-zA-Z]+$/,
        errorMessage: 'Last name should be alphabets only'
      }
    },
    email: {
      notEmpty: {
        options: true,
        errorMessage: 'Email is required'
      },
      isEmail: {
        errorMessage: 'Email is invalid'
      }
    },
    password: {
      notEmpty: {
        options: true,
        errorMessage: 'Password is required'
      },
      isLength: {
        options: [{ min: 7 }],
        errorMessage: 'password should be at least 7 characters'
      }
    }
  });
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send({ message: errors[0].msg });
  }
  return next();
};

export default userRequiredInput;

