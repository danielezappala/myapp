var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

var routeContacts = require('../routes/contacts/contactsList')
var membershipPlansController = require('../controllers/memberships')
var seasonController = require('../controllers/seasons')
var programController = require('../controllers/programs')
var turnController = require('../controllers/turns')
var siteController = require('../controllers/site')

/* GET home page. */
router.get('/home', siteController.getHome);
/* GET init page. */
router.get('/init', siteController.getInit);
/* GET contacts page. */
router.use('/contacts', routeContacts);
/* GET membership_plans page. */
router.get('/membership_plans_list', membershipPlansController.getMembershipPlans);
/* GET membership_plans page. */
router.get('/seasons_list', seasonController.getSeasons);
/* GET programs page. */
router.get('/programs_list', programController.getPrograms);
/* GET programs page. */
router.get('/turns_list', turnController.getTurns);
// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
    res.redirect('home')
  });

module.exports = router;
