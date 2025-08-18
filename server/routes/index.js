import { Router } from "express";

import signUpController from '../controllers/authentication/SignUpController.js';

const router = Router();

router.post('/api/sign-up', signUpController.insert);

export default router;