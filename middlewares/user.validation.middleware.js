const { user } = require('../models/user');
const { UserRepository } = require('../repositories/userRepository');



const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation

      try{
        let busyEmail = UserRepository.getOne({email: req.body.email});
        let busyPhoneNumber = UserRepository.getOne({phoneNumber: req.body.phoneNumber});

        if (!req.body.firstName){
            throw new Error('First name is not valid')
        }
        if (!req.body.lastName){
          throw new Error('Last name is not valid')
      }
      if (!req.body.email){
        throw new Error('Email is not valid')
    }
    if ((req.body.email).toLowerCase().match(/[\s!#$%&"'*\+\-\/=?^`{|}~]/g)){
      throw new Error('Email includes forbidden characters')
  }
    if (!(req.body.email).toLowerCase().match(/^[\w-\.]+@(gmail\.com)$/)){
      throw new Error('Email must be gmail')
  }

    if (!req.body.phoneNumber){
      throw new Error('Phone number is not valid')
  }
  if (!req.body.phoneNumber.match(/^\+380\d{9}$/)){
    throw new Error('Phone number must be +380xxxxxxxxx')
  }
  if (!req.body.password){
    throw new Error('Pasword number is not valid')
  }
  if (req.body.password.length < 3){
    throw new Error('Password is too short')
  }


  if(busyEmail){
    throw new Error('A user with this email address already exists! Please use a different email address.')
  }

  if(busyPhoneNumber){
    throw new Error('A user with this phone number already exists! Please use a different phone number.')
  }

        next();
    }  catch (err) {
        res.status(400).json({error: true, message: err.message})
    }
  }

  const updateUserValid = (req, res, next) => {
      // TODO: Implement validatior for user entity during update
      try{
        let busyEmail = UserRepository.getOne({email: req.body.email});
        let busyPhoneNumber = UserRepository.getOne({phoneNumber: req.body.phoneNumber});

        if(!req.body){
          throw new Error('Request body must be is not null')
      }

  if(busyEmail){
    throw new Error('A user with this email address already exists! Please use a different email address.')
  }

  if(busyPhoneNumber){
    throw new Error('A user with this phone number already exists! Please use a different phone number.')
  }

        next();
    }  catch (err) {
        res.status(400).json({error: true, message: err.message})
    }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;