import express from 'express'
import { getAllUser, getSingleuser, updateUser  , deleteUser  } from './../controllers/userController.js';
    
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';



//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id' ,  deleteUser);

// getsingle user
router.get('/:id' ,  getSingleuser);

//get Alltour
router.get('/' , getAllUser);






export default router;