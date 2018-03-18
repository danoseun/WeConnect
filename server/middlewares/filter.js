import { businesses } from '../../dummyDb';

/**
 * Class representing filter controller
 *
 * @class FilterController
 */
class FilterController {
  /**
   * @description Searches and gets business by Location
   *
   * @param {Object} req - api request
   *
   * @param {Object} res - route response
   *
   * @param {Function} next - next middleware
   *
   * @return {JSON} - message and the location Array
   */
  static filterByLocation(req, res, next) {
    const { location } = req.query;
    const locationArray = [];
    if (location) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (location.toLowerCase() === businesses[i].location.toLowerCase()) {
          locationArray.push(businesses[i]);
        }
      }
      return res.status(200).send({
        message: 'Your search was successful',
        filteredArray: locationArray
      });
    }
    next();
  }

  /**
   * @description Searches and gets business by Category
   *
   * @param {Object} req - api request
   *
   * @param {Object} res - route response
   *
   * @param {Function} next - next middleware
   *
   * @return {JSON} - message and the category Array
   */
  static filterByCategory(req, res, next) {
    const { category } = req.query;
    const categoryArray = [];
    if (category) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (category.toLowerCase() === businesses[i].category.toLowerCase()) {
          categoryArray.push(businesses[i]);
        }
      }
      return res.status(200).send({
        message: 'Your search was successful',
        filteredArray: categoryArray
      });
    }
    next();
  }
}
export default FilterController;
