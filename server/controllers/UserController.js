/*
TODO: 
  change require to reflect user models in actual repo
*/
/* TEST USER
*/
const person = {
  full_name: 'Juan Loco',
  email: 'juan@aol.com',
  profile_img: 'profile pic',
  user_age: '20',
  location: 'your mom\'s house',
  dog_name: 'Fido'
};

//const { User } = require('../models/UserModels');

const userController = {};

// userController.sendUserData = async (req, res, next) => {
//   const { userID } = req.params;
//   // send user info to FE
//   if (!userName) {
//     return next({
//       log: 'UserController.sendUserData ERROR: userName is undefined',
//       message: { err: 'UserController.sendUserData ERROR: Check server logs for details' },
//     });
//   }
//   try {
//     const queryResult = await User.find({_id: userID});
//     res.locals.data = queryResult;
//   } catch (err) {
//     console.log(err);
//   }
//   return next();
// };



module.exports = userController;
