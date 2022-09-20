module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'Leonardo',
        email: 'leo@test.com',
        password: '1234567',
      },
      {
        full_name: 'Eduardo',
        email: 'edu@test.com',
        password: '1234567',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
