console.log('defining model membershipPlan')


const Sequelize = require('sequelize')
const sequelize = require('../util/database');
const Turn = require('./turn');

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
    },
        include: Turn
});

module.exports = MembershipPlan;
