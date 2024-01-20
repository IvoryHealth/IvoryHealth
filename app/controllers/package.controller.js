const db = require("../models");

//Model
const Package = db.packages
const Test = db.tests

// add package function 

const addPackage = async (req, res) => {

    let data = {
        name : req.body.name,
        medical_center_id : req.body.medical_center_id,
        status : 1
    }

    const package  = await Package.create(data) 
    res.status(200).send(package)
}

//get a package 

const getPackages = async(req,res) => {

    if(req.params.id) {
        const packageId = req.params.id;
        const package = await Package.findOne({
            where: {
            id: packageId,
            },
            include: [{
                model: db.medicalCenters
            }],
        });
        if(!package) {
            res.status(200).send([])     
        } else {
            res.status(200).send(package)
        }
    } else {  
        const package = await Package.findAll()
        res.status(200).send(package)
    }
}

//get package 

const getAllPackages = async(req,res) => {

    const package = await Package.findAll({
        attributes: ['name','medical_center_id'],
        group: ['name','medical_center_id'],
    }).then(package => {
        const distinctData = package.map(item => ({ medical_center_id: item.medical_center_id, name: item.name }));
        res.status(200).send(distinctData)
    });
}

const getPackageDetails = async(req,res) => {

    if(req.params.id) {
        Package.findByPk(req.params.id, {
            include: [{
              model: Test,
              through: 'package_details',
            }],
          }).then(package => {
            res.status(200).send(package.tests)
          })
    } else {  
        res.status(200).send('package')
    }
}

module.exports = {
    addPackage,
    getPackages,
    getAllPackages,
    getPackageDetails
}
