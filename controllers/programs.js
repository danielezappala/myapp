const Program = require('../models/program');
console.log('controller programs')
exports.bulkCreatePrograms = () => {
    console.log('creating programs in seasons')
    Program.bulkCreate(
        [
            { name: 'ECO', seasonId: 1 },
            { name: 'UMANITA', seasonId: 1 }
        ]
    ).then(programs=>{
        console.log(programs.length + ' programs created')
        return programs
    })
    .catch(err=>{
        console.log(err)
    })
  
}

exports.getPrograms = (req,res,next) =>{
    Program.findAll()
    .then(programs =>{
        res.render('programs_list', {
            programs: programs,
            title: 'Elenco programmi'
          });
    })
}