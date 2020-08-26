const Turn = require('../models/turn');

exports.bulkCreateTurns = (programs) => {
    Turn.bulkCreate(
        [
            {name: "A", programId: programs[0].id},
            {name: "B", programId: programs[0].id},
        ]
    )
    .then(turns=>{
        console.log(turns.length + ' turns created')
        return turns
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getTurns = (req,res,next) =>{
    Turn.findAll(
    )
    .then(turns =>{
        console.log('rendering turns ' + turns)
        res.render('turns_list', {
            turns: turns,
            title: 'Elenco turni'
          });
    })
}