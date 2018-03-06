import validator from 'validator';

const isEmpty = validator.isEmpty;
const isEmail = validator.isEmail;

export default {
    /**
     * Check for all required input fields
     * 
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @param {function} next -Calls the next route handler
     * @returns {object} JSON object representing failure message
     */

     businessRequiredInputs(req, res, next) {
         if (!req.body.businessName || isEmpty(req.body.businessName)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Business Name cannot be empty'
             });
         }
         if (!req.body.description || isEmpty(req.body.description)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Description can not be empty'
             });
         }
         if (!req.body.phoneNumber || isEmpty(req.body.phoneNumber)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Phone Number can not be empty'
             });
         }
         if (!req.body.email || isEmpty(req.body.email) || isEmail(req.body.email)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Email can not be empty'
             });
         }
         if (!req.body.location || isEmpty(req.body.location)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Location can not be empty'
             });
         }
         if (!req.body.category || isEmpty(req.body.location)) {
             return res.status(406).send({
                 status: 'Fail',
                 message: 'Category can not be empty'
             });
         }
         next();
     },

     /**
      * Checks for the required input fields
      *
      * @param {object} req - The request object
      * @param {object} res - The response object
      * @param {function} next - Calls the next route handler
      * @returns {object} JSON object representing the failure message
      */
      reviewRequiredInput(req, res, next) {
          if (!req.body.content || isEmpty(req.body.content)) {
              return res.status(406).send({
                  status: 'Fail',
                  message: 'Content can not be empty'
              });
          }
          next();
      },

      /**
      * Checks for the required input fields
      *
      * @param {object} req - The request object
      * @param {object} res - The response object
      * @param {function} next - Calls the next route handler
      * @returns {object} JSON object representing the failure message
      */
      userRequiredInput(req, res, next) {
          if (!req.body.email || isEmpty(req.body.email) || isEmail(req.body.email)) {
              return res.status(406).send({
                  status: 'Fail',
                  message: 'Email can not be empty'
              });
          }
          if (!req.body.password || isEmpty(req.body.password)) {
              return res.status(406).send({
                  status: 'Fail',
                  message: 'Password can not be empty'
              });
          }
          next();
      }
      
};