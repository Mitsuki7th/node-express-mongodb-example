const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

/**
 * Get user by Email
 * @param {string} email - Email
 * @returns {Promise} - Promise resolving to the user object or null if not found
 */
async function checkEmail(email) {
  return User.findOne({ email: email }); // menemukan email yang terdaftar pada sistem
}

/**
 * Change user's password
 * @param {string} id - User ID
 * @param {string} newPassword - New Password
 * @returns {Promise}
 */
async function updatePassword(id, newPassword) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        password: newPassword,
      },
    }
  );
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkEmail,
  updatePassword,
};
