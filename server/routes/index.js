import { Router } from "express";

import { authenticateCookieTokenMiddleware } from "../services/tokenService.js";
import signUpController from '../controllers/authentication/SignUpController.js';
import signInController from "../controllers/authentication/SignInController.js";

import ProductControllers from "../controllers/ProductControllers.js";

const router = Router();

router.post('/api/sign-up', signUpController.insert);
router.post('/api/sign-in', signInController.insert);

router.get('/api/products', authenticateCookieTokenMiddleware, ProductControllers.show);

export default router;