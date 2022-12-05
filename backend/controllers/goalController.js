const asyncHandler = require('express-async-handler');

// @desc    getGoal
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goal' });
});

// @desc    setGoal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field.');
  }

  res.status(200).json({ message: 'Set Goal' });
});

// @desc    updateGoal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

// @desc    deleteGoal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
