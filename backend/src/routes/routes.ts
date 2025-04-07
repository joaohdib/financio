// routes/index.ts
import { Router } from 'express';
import { test } from '../controllers/userController';

const router = Router();

// Definindo a rota POST /signup
router.post('/test', test);

export default router;