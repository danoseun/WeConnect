import { reviews, businesses } from '../../dummyDb';
/**
 * Class representing review controller
 *
 * @class ReviewController
 */
class ReviewController {
  /**
   *  Add review for a business on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof ReviewController
   */
  static addReview(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i];
      if (business.id === parseInt(req.params.businessId, 10)) {
        req.body.id = reviews.length + 1;
        req.body.businessId = parseInt(req.params.businessId, 10);
        reviews.push(req.body);
        return res.status(201).send({
          status: 'Success',
          message: 'Review added successfully',
          review: reviews[reviews.length - 1]
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found',
    });
  }
  /**
   *  Get review(s) for a business on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof ReviewController
   */
  static getAllReviews(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      const business = businesses[i],
        review = [];
      if (business.id === parseInt(req.params.businessId, 10)) {
        for (let j = 0; j < reviews.length; j += 1) {
          if (reviews[j].businessId === business.id) {
            review.push(reviews[j]);
          }
        }
        return res.status(200).send({
          message: 'Success, review found',
          business: businesses[i],
          reviews: review
        });
      }
    }
    return res.status(404).send({
      status: 'Fail',
      message: 'Business not found'
    });
  }
}

export default ReviewController;
