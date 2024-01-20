const db = require("../models");

//Model
const MedicalCenter = db.medicalCenters
const Package = db.packages

// add medical center function 

const addMedicalCenter = async (req, res) => {

    let data = {
        name : req.body.name,
        display_name : req.body.display_name,
        address : req.body.address,
        state: req.body.state,
        district: req.body.district,
        pincode: req.body.pincode,
        geocode: req.body.geocode,
        medical_center_spoc_name: req.body.medical_center_spoc_name,
        medical_center_email_id: req.body.medical_center_email_id,
        medical_center_spoc_designation: req.body.medical_center_spoc_designation,
        medical_center_type: req.body.display_name,
        medical_center_spoc_contact: req.body.medical_center_spoc_contact,
        description: req.body.description,
        status: 0
    }

    const medicalCenter  = await MedicalCenter.create(data) 
    res.status(200).send(medicalCenter)
}

//get medical centers 

const getMedicalCenters = async(req,res) => {

//     const $query = `
//                 SELECT mc.*, p.* from medical_centers mc
//   INNER JOIN packages p ON mc.id = p.medical_center_id
// `

//     db.query($query, (err, result) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     const rows = result.rows;
//     result.status(200).send(rows);

//   // Process the fetched data
  
//  // console.log('Fetched data:', rows);

//   // Close the PostgreSQL client
//  //pg.end();
// });


    if(req.params.id) {
        const medicalCenterId = req.params.id;
        const medicalCenter = await MedicalCenter.findAll({
            where: {
            id: medicalCenterId,
            }
        });
    
        if(!medicalCenter) {
            res.status(200).send([])     
        } else {

            const package = await Package.findAll({
                where: {
                    medical_center_id: medicalCenterId,
                    status : 1
                }
            });
            res.status(200).send({
                "packages" : package,
                "medicalCenter" : medicalCenter
            })
        }
    } else {  
        const medicalCenter = await MedicalCenter.findAll()
        res.status(200).send(medicalCenter)
    }
}

module.exports = {
    addMedicalCenter,
    getMedicalCenters
}
