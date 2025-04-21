const Plan = require('../models/plan');

// Create a travel plan
exports.createPlan = async (req, res) => {
    try {
        const plan = new Plan(req.body);
        await plan.save();
        res.status(201).json(plan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all plans
exports.getAllPlans = async (req, res) => {
    const plans = await Plan.find();
    res.json(plans);
};

// Get a plan by ID
exports.getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
        res.json(plan);
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
};

// Update a plan (PATCH)
exports.updatePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
        res.json(plan);
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
};

// Delete a plan
exports.deletePlan = async (req, res) => {
    try {
        const result = await Plan.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Plan not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: 'Invalid ID format' });
    }
};
