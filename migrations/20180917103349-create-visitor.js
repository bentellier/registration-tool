// 'use strict';
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('Visitors', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       visitorName: {
//         type: Sequelize.TEXT
//       },
//       visitorCompany: {
//         type: Sequelize.TEXT
//       },
//       visitedName: {
//         type: Sequelize.TEXT
//       },
//       reasonSelection: {
//         type: Sequelize.TEXT
//       },
//       date: {
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('Visitors');
//   }
// };