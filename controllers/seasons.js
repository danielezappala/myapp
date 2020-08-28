
const Season = require('../models/season');
const Program = require('../models/program');
console.log('controller seasons')
Season.hasMany(Program)
Program.belongsTo(Season)

exports.getSeasons = (req,res,next) =>{
    Season.findAll(
        {include: Program}
    )
    .then(seasons =>{
        console.log('programs ' + seasons[0].program)
        res.render('seasons_list', {
            seasons: seasons,
            title: 'Elenco stagioni'
          });
    })
}