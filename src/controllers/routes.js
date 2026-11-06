import { Router } from 'express';

// Create a new router instance
const router = Router();

// TODO: Add import statements for controllers and middleware
import { homePage, testErrorPage } from './index.js';

// TODO: Add route definitions

// Home page
router.get('/', homePage);

// Error page
router.get('/test-error', testErrorPage);

export default router;