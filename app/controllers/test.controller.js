const db = require("../models");

//Model
const SubTests = db.subTests
const Test = db.tests

const getTestDetails = async(req,res) => {

    if(req.params.id) {
        Test.findByPk(req.params.id, {
            include: [{
              model: SubTests,
              through: 'test_details',
            }],
          }).then(test => {
            res.status(200).send(test)
          })
    } else {  
        res.status(200).send('test')
    }
}

module.exports = {
    getTestDetails,
}
