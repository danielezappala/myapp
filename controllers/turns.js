const Turn = require('../models/turn');
console.log('controller turns')
exports.bulkCreateTurns = () => {
    Turn.bulkCreate(
        [
            {name: "A", programId: 1},
            {name: "B", programId: 2},
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