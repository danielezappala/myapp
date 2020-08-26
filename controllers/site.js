const Season = require('../models/season');
const Program = require('../models/program');

Season.hasMany(Program);
Program.belongsTo(Season);

exports.getHome = (req, res, next) => {
    res.render('index', { 
        title: 'home', 
      });
};

exports.getInit = (req,res,next) => {
      console.log('creating bulk seasons and programs')
      Season.create(
          { title: '19-20', programs:[{name: 'ECO' },{name: 'SEEDS'}]},
          {
            include: [Program]
          }
      )
      .then(seasons =>{
        console.log('seasons created ' + JSON.stringify(seasons))
      })
      .catch(err =>{
        console.log(err)
      })
    }

