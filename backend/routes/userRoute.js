// backend/routes/userRoute.js

import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/admin/login', adminLogin);

export default router;

