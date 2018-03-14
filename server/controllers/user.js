import { users } from '../../dummyDb';

/**
 * Class representing user controller
 *
 * @class UserController
 */
class UserController {
  /**
     * Register a user on the plaftorm
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
     * @memberof UserController
     */
  static registerUser(req, res) {
    const newUser = {
      id: users.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };
    users.push(newUser);
    return res.status(201).json({
      status: 'Success',
      message: 'Signed up successfully',
      user: newUser
    });
  }
  /**
   * Login user on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */
  static loginUser(req, res) {
    const { email, password } = req.body;
    users.forEach((user) => {
      if (email === user.email && password === user.password) {
        return res.status(200).json({
          status: 'Success',
          message: 'Logged in successfully'
        });
      }
    });
    res.status(401).json({
      status: 'Failed',
      message: 'Error logging in'
    });
  }
  /**
   * Get all users on the platform
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success message
   * @memberof UserController
   */
  static getAllUsers(req, res) {
    return res.status(200).json({
      status: 'Success',
      user: users
    });
  }
}

export default UserController;
