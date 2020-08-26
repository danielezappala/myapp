
const Season = require('../models/season');

exports.getSeasons = (req,res,next) =>{
    Season.findAll()
    .then(seasons =>{
        res.render('seasons_list', {
            seasons: seasons,
            title: 'Elenco stagioni'
          });
    })
}