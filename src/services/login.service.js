const { User } = require('../database/models');
const { generateJwtToken } = require('../utils/jwt');
const error = require('../utils/error');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.dataValues.password !== password) {
    throw error(400, 'Invalid fields');
  }

  delete user.dataValues.password;

  return generateJwtToken(user);
};

module.exports = {
  login,
};
