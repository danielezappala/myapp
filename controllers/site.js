const Season = require('../models/season');
const Program = require('../models/program');
const MembershipPlan = require('../models/membership_plan');
const Turn = require('../models/turn');
const Contact = require('../models/contact');
const ContactDetails = require('../models/contact_detail');
//const { ProxyAuthenticationRequired } = require('http-errors');
const Production = require('../models/production');
const Performance = require('../models/performance');
const Membership = require('../models/membership');
console.log('controller site')
Season.hasMany(Program);
Program.belongsTo(Season);
Program.hasMany(Turn);
Turn.belongsTo(Program);


exports.getHome = (req, res, next) => {
    res.render('index', { 
        title: 'home', 
      });
};

exports.getInit = (req,res,next) => {
    console.log('creating bulk data')
    Contact.bulkCreate({
      firstName: "Daniele",
      lastName: "Zappala'",
      sex: "M",
      contactsDetails: [{
        type_detail: "phone",
        detail: '123'
      }]
    },
    {
      firstName: "Elena",
      lastName: "Gorno'",
      sex: "F",
      contactsDetails: [{
        type_detail: "mobile",
        detail: '1233'
      }]
    },
      {
        include: ContactDetails
      }
    )
    Season.bulkCreate([
      {
        title: "19/20"
      },
      {
        title: "20/21"
      }])
    Program.bulkCreate(
      [{
        name: "ECO",
        seasonId:1
      },
      {
        name: "UMANITA",
        seasonId:1
      },
      {
        name: "SEEDS",
        seasonId:2
      }
    ]
    )
    Turn.bulkCreate(
      [
        { 
          name: 'A',
          programId: 1
        },
        { name: 'B', 
          programId: 1
        },
        { 
          name: 'A',
          programId: 2
        },
        { name: 'B', 
          programId: 2
        }
      ]
    )
    MembershipPlan.bulkCreate(
      [
          { 
            type: 'Intero', 
            turnId: 1
          },
          { 
            type: 'Ridotto', 
            turnId: 1
          },
          { 
            type: 'Intero', 
            turnId: 2
          },
          { 
            type: 'Ridotto', 
            turnId: 2
          },
        ] 
    )
    Membership.bulkCreate(
      [
        {
          contactId:1,
          turnId:1
        },
        {
          contactId:2,
          turnId:2
        }
      ]
    )
    Production.bulkCreate([
      { title: 'EVA'},
      { title: 'AGATA'}
    ])
    Performance.bulkCreate(
      [
        {
          turnId: 1,
          productionId: 1 
        },
        {
          turnId: 2,
          productionId: 1 
        },
        {
          turnId: 1,
          productionId: 2 
        },
        {
          turnId: 2,
          productionId: 2
        }
      ])
    //res.render('init',{title: 'Il database è stato popolato con i dati di prova'})
    }

