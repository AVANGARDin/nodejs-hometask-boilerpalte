const { fighter } = require('../models/fighter');
const { FighterRepository } = require('../repositories/fighterRepository');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    try{
      let db = FighterRepository.getOne({name: req.body.name});

      if (!req.body.name){
          throw new Error('Name is not valid')
      }
//       if (!req.body.lastName){
//         throw new Error('Last name is not valid')
//     }
//     if (!req.body.email){
//       throw new Error('Email is not valid')
//   }
//   if (!req.body.phoneNumber){
//     throw new Error('Phone number is not valid')
// }
// if (!req.body.password){
//   throw new Error('Pasword number is not valid')
// }



if(db){
  throw new Error('A fighter with this email address already exists! Please use a different name.')
}

      next();
    }  catch (err) {
      res.status(400).json({error: true, message: err.message})
  }
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;