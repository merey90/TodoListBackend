import { Router } from 'express';
import UserRouter from './Users';
import TodosRouter from './Todos';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/todos', TodosRouter);

// Export the base-router
export default router;
