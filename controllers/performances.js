const Performance = require('../models/performance');

exports.bulkCreateProductions = (productions, turns) => {
    Performance.bulkCreate(
        [
            { productionId: productions[0].id, turnId: turns[0].id, date: "10/13/2020" }
        ]
    ).then(performances=>{
        console.log(performances.length + ' performances created')
        return performances
    })
    .catch(err=>{
        console.log(err)
    })  
}

exports.getPerformances = (req,res,next) =>{
    Performances.findAll()
    .then(performances =>{
        res.render('performances_list', {
            performances: performances,
            title: 'Elenco produzioni'
          });
    })
}