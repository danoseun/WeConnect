import businesses from '../../dummyDb';

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
      user: newBusiness
    });
  }
}
export default BusinessController;
