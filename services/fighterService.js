const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    create(userData) {
      const user = FighterRepository.create(userData);
      if(!user) {
          return null;
      }
      return user;
  }

    getAll(){
      const users = FighterRepository.getAll();
      if(users.length < 1){
        return null;
      }
      return users;
    }
}

module.exports = new FighterService();