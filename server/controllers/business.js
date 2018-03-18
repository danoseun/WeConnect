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
  /**
*
*Filter user search by locaton/category and both.
* @param {any} req
* @param {any} res
* @param {any} next
* @returns {JSON} gets sorted search
* @memberof BusinessController
*/
  static filterSearch(req, res, next) {
    const { category, location } = req.query;
    const filteredCategory = businesses.filter(businessItem =>
      businessItem.category === category);
    const filteredLocation = businesses.filter(businessItem =>
      businessItem.location === location);
    const filteredArray = businesses.filter(businessItem =>
      businessItem.location === location
      && businessItem.category === category);
    if (category || location) {
      if (category && location === undefined) {
        if (filteredCategory.length > 0) {
          res.status(200)
            .send({
              filteredCategory,
            });
        } else if (filteredCategory.length === 0) {
          res.status(404)
            .send({
              status: 'Fail',
              message: `The category '${category}' does not exist`,
            });
        }
      }
      if (location && category === undefined) {
        if (filteredLocation.length > 0) {
          res.status(200)
            .send({
              filteredLocation,
            });
        }
        if (filteredLocation.length === 0) {
          res.status(404)
            .send({
              status: 'Fail',
              message: `The location '${location}' does not exist`,
            });
        }
      }
    }
    if (category !== undefined && location !== undefined) {
      if (filteredArray.length > 0) {
        res.status(200)
          .send({
            filteredArray,
          });
      } else if (filteredArray.length === 0) {
        res.status(404)
          .send({
            status: 'Fail',
            message: 'Location or Category not found',
          });
      }
    } next();
  }
}


export default BusinessController;

