const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', async (req, res,next) => {
  try {
      const users = await UserService.getAll();
      if(!users){
        res.status(404)
        throw new Error('Users not foun')
      }else{
        res.data = users;
      }
  } catch (err) {
      res.err = err
  } finally {
      next()
  }
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
  try {
      const user = await UserService.search({id: req.params.id})
      if(!user){
        throw new Error('User not found')
      }
      res.data = user
  } catch (err) {
      res.err = err
  } finally {
      next()
  }
}, responseMiddleware);

router.post('/', createUserValid, async (req, res,next) => {
  try {
      const user = await UserService.create(req.body);
      if(!user){
        throw new Error('User not found')
      }
      res.data = user;
  } catch (err) {
      res.err = err
  } finally {
      next()
  }
}, responseMiddleware);

router.put('/:id', async (req, res,next) => {
  try {
    const id = req.params.id;
      const user = await UserService.getOne({id: id});
      if(!user){
        throw new Error('User not found')
      }else{
        UserService.update(user.id, {email: user.email + "updated"});
        res.data = user;
      }
  } catch (err) {
      res.err = err
  } finally {
      next()
  }
}, responseMiddleware);

router.delete('/:id', async (req, res,next) => {
  try {
    const id = req.params.id;
      const user = await UserService.getOne({id: id});
      if(!user){
        throw new Error('User not found')
      }else{
        UserService.delete(user);
        res.data = user;
      }
  } catch (err) {
      res.err = err
  } finally {
      next()
  }
}, responseMiddleware);



module.exports = router;