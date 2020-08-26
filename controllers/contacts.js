const Contact = require('../models/contact');
const ContactDetail = require('../models/contact_detail');

Contact.hasMany(ContactDetail);
ContactDetail.belongsTo(Contact)

exports.bulkCreateContacts = ()=>{
    Contact.bulkCreate([
        {
            firstName: 'Daniele',
            lastName: 'Zappalà',
            sex: 'M',
            birthdate: "06/12/1970",
            contactDetails: [{
                detail: "123",
                detail_type: "phone"
            }]
        }],
        {
            include: [ContactDetail]
        }
    )
}

exports.getContacts = (req,res,next) =>{
    Contact.findAll(
        {include: ContactDetail}
    )
    .then(contacts =>{
         console.log('rendering contacts ' + contacts)
        res.render('contacts_list', {
            contacts: contacts,
            title: 'Elenco contatti'
          });
    })
}