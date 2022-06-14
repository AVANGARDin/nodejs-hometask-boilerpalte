const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    create(userData) {
      const user = UserRepository.create(userData);
      if(!user) {
          return null;
      }
      return user;
  }

    getAll(){
      const users = UserRepository.getAll();
      if(users.length < 1){
        return null;
      }
      return users;
    }

    getOne(userId){
      const user = UserRepository.getOne(userId);
      if(!user){
        return null;
      }
      return user;
    }

    delete(user){
      const deletedUser = UserRepository.delete(user.id);
      if(!deletedUser){
        return null;
      }
      return deletedUser;
    }

    update(id, dataToUpdate){
      const updatedUser = UserRepository.update(id, dataToUpdate);
      if(!updatedUser){
        return null;
      }
      return updatedUser;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();