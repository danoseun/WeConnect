import { businesses, reviews } from '../../dummyDb';

/**
 * Class representing business controller
 *
 * @class BusinessController
 */
class BusinessController {
  /**
     * Register a business on the plaftorm
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof BusinessController
     */
  static registerBusiness(req, res) {
    const newBusiness = {
      id: businesses.length + 1,
      businessName: req.body.businessName,
      description: req.body.description,
      email: req.body.email,
      location: req.body.location,
      category: req.body.category,
      phoneNumber: req.body.phoneNumber
    };
    businesses.push(newBusiness);
    return res.status(201).json({
      status: 'Success',
      message: 'Business created successfully',
      business: newBusiness
    });
  }
  /**
   * Update business Profile on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof BusinessController
   */
  static updateBusinessProfile(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i];
      if (business.id === parseInt(req.params.businessId, 10)) {
        business.businessName = req.body.businessName;
        business.description = req.body.description;
        business.email = req.body.email;
        business.location = req.body.location;
        business.category = req.body.category;
        business.phoneNumber = req.body.phoneNumber;
        return res.status(201).send({
          status: 'Success',
          message: 'Business profile updated successfully',
          business,
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
  /**
   * Delete a business on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof BusinessController
   */
  static deleteBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i];
      if (business.id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);
        return res.status(200).send({
          status: 'Success',
          message: 'Business deleted successfully',
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
  /**
   *  Get a single business on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof BusinessController
   */
  static getOneBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i];
      const review = [];
      if (business.id === parseInt(req.params.businessId, 10)) {
        for (let j = 0; j < reviews.length; j += 1) {
          if (reviews[j].businessId === business.id) {
            review.push(reviews[j]);
          }
        }
        return res.status(200).send({
          status: 'Success',
          business: businesses[i]
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
  /**
   *Get all businesses on the platform
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} - JSON object representing the businesses
   * @memberof BusinessController
   */
  static getAllBusinesses(req, res) {
    return res.status(200).json({
      status: 'Success',
      businesses,
      reviews
    });
  }
}


export default BusinessController;

