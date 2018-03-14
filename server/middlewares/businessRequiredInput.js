/**
 * Check for all required input fields
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next -Calls the next route handler
 * @returns {object} JSON object representing failure message
 */


const businessRequiredInputs = (req, res, next) => {
  req.checkBody({
    businessName: {
      notEmpty: {
        options: true,
        errorMessage: 'Business name is required'
      },
      isLength: {
        options: [{ min: 4 }],
        errorMessage: 'Business name should be at least 4'
      }
    },
    description: {
      notEmpty: {
        options: true,
        errorMessage: 'Description is required'
      },
      isLength: {
        options: [{ min: 10 }],
        errorMessage: 'Description should have at least 10 charcters'
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
    location: {
      notEmpty: {
        options: true,
        errorMessage: 'Location is required'
      },
      isLength: {
        options: [{ min: 3 }],
        errorMessage: 'Location should have at least 3 characters'
      },
      matches: {
        options: /^[a-zA-Z]+$/,
        errorMessage: 'Location should contain alphabets only'
      }
    },
    category: {
      notEmpty: {
        options: true,
        errorMessage: 'Category is required'
      },
      isLength: {
        options: [{ min: 6 }],
        errorMessage: 'Category should have at least 6 characters'
      },
      matches: {
        options: /^[a-zA-Z]+$/,
        errorMessage: 'Category should contain alphabets only'
      }
    },
    phoneNumber: {
      notEmpty: {
        options: true,
        errorMessage: 'PhoneNumber is required'
      },
      matches: {
        options: /^[0-9]+$/,
        errorMessage: 'Phone number should be numbers only'
      }
    }
  });
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send({ message: errors[0].msg });
  }
  next();
};

export default businessRequiredInputs;

