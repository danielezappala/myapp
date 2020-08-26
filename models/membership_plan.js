const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const MembershipPlan = sequelize.define('membershipPlans',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: 
    {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = MembershipPlan;
