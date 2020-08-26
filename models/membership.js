const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Membership = sequelize.define('memberships',{
    turn: Sequelize.STRING,
    contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contacts', 
          key: 'id'
        }
      },
      membershipPlanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'membershipPlans', 
          key: 'id'
        }
      }
});

module.exports = Membership;
