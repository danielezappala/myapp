const Membership = require('../models/membership');
const MembershipPlan = require('../models/membership_plan');
const Program = require('../models/program')
const Contact = require('../models/contact');

Program.hasMany(MembershipPlan)
    MembershipPlan.belongsTo(Program)

    MembershipPlan.belongsToMany(Contact, { through: 'memberships' });
    Contact.belongsToMany(MembershipPlan, { through: 'memberships' });
  
exports.bulkCreateMembershipPlans = (programs) =>{
    MembershipPlan.bulkCreate(
        { type: "Intero", programId: programs[0].id },
        { type: "Ridotto", programId: programs[0].id },
        { type: "Intero", programId: programs[1].id },
        { type: "Ridotto", programId: programs[1].id }
    )
    return membershipPlans
}
exports.bulkCreateMembership = (turns,membeeshipPlans) =>{
    Membership.bulkCreate(
        [{
            turn: turns[1].id,
            contactId: contact.id,
            membershipPlanId: membershipPlan.id
        }])
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
        {include: Program}
    )
    .then(membership_plans =>{
        console.log('rendering membership plans ' + membership_plans)
        res.render('membership_plans_list', {
            membership_plans: membership_plans,
            title: 'Elenco piani abbonamento'
          });
    })
}