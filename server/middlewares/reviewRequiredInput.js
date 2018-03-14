/**
 * Checks for the required input fields
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - Calls the next route handler
 * @returns {object} JSON object representing the failure message
 */
const reviewRequiredInput = (req, res, next) => {
  req.checkBody({
    content: {
      options: true,
      errorMessage: 'Content is required'
    },
    isLength: {
      options: [{ min: 6, max: 100 }],
      errorMessage: 'Content should have between 6 and 1,000'
    }
  });
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send({ message: errors[0].msg });
  }
  next();
};

export default reviewRequiredInput;
