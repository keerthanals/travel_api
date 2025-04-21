const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

router.post('/plans', planController.createPlan);
router.get('/plans', planController.getAllPlans);
router.get('/plans/:id', planController.getPlanById);
router.patch('/plans/:id', planController.updatePlan);
router.delete('/plans/:id', planController.deletePlan);

module.exports = router;
