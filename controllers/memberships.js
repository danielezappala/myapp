const Membership = require('../models/membership');
const MembershipPlan = require('../models/membership_plan');
const Program = require('../models/program')
const Contact = require('../models/contact');
const Turn = require('../models/turn');
console.log('controller membership')

    MembershipPlan.belongsToMany(Contact, { through: 'memberships' });
    Turn.belongsToMany(MembershipPlan, { through: 'memberships' });
    
    MembershipPlan.hasMany(Membership);
    Membership.belongsTo(MembershipPlan);

exports.bulkCreateMembershipPlans = () =>{
    MembershipPlan.bulkCreate(
        { type: "Intero", programId: 1 },
        { type: "Ridotto", programId: 2 }
    )
}

exports.bulkCreateMembership = () =>{
    Membership.bulkCreate(
        [{
            turnId: 1,
            contactId: 1,
            membershipPlanId: 1
        },
        {
            turnId: 2,
            contactId: 2,
            membershipPlanId: 2
        }
    ])
        .then(memberships=>{
            console.log(memberships.length + ' memberships created')
            return memberships
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.getMembershipPlans = (req,res,next) =>{
    MembershipPlan.findAll(
        {include: Turn}
    )
    .then(membership_plans =>{
        console.log('rendering membership plans ' + membership_plans)
        res.render('membership_plans_list', {
            membership_plans: membership_plans,
            title: 'Elenco piani abbonamento'
          });
    })
}