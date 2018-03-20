import { businesses } from '../../dummyDb';

/**
 * Class representing filter controller

  /**
   * @description Searches and gets business by Location and category
   *
   * @param {Object} req - API request
   *
   * @param {Object} res - route response
   *
   * @param {Function} next - next middleware
   *
   * @return {JSON} - message and the Array
   */
const FilterController = (req, res, next) => {
  const { category, location } = req.query;
  let categories;
  let locations;
  if (category && location) {
    const filteredArray = businesses.filter(businessItem =>
      businessItem.location.toLowerCase() === location.toLowerCase()
        && businessItem.category.toLowerCase() === category.toLowerCase());
    if (filteredArray.length === 0) {
      res.status(406)
        .send({
          status: 'Fail',
          message: 'The location and category matching does not exist',
        });
    }
    res.status(200)
      .send({
        filteredArray,
      });
  }
  if (category && !location) {
    categories = businesses.filter(ctg =>
      ctg.category.toLowerCase() === category.toLowerCase());
    if (categories.length === 0) {
      res.status(406)
        .send({
          status: 'Fail',
          message: `The category '${category}' does not exist`,
        });
    }
    res.status(200)
      .send({
        categories,
      });
  }
  if (location && !category) {
    locations = businesses.filter(loc =>
      loc.location.toLowerCase() === location.toLowerCase());
    if (locations.length === 0) {
      res.status(406)
        .send({
          status: 'Fail',
          message: `The location '${location}' does not exist`,
        });
    }
    res.status(200)
      .send({
        locations,
      });
  }
  next();
};
export default FilterController;
