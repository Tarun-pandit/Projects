const express = require('express');
const router = express.Router();
const Bank = require('../models/Bank');

// GET /banks - Show all banks
router.get('/', async (req, res) => {
  try {
    const banks = await Bank.find({});
    res.render('banks/index', { banks });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// GET /banks/new - Show form to create new bank
router.get('/new', (req, res) => {
  res.render('banks/new');
});

// POST /banks - Create new bank
router.post('/', async (req, res) => {
  try {
    const newBank = new Bank(req.body);
    await newBank.save();
    res.redirect('/banks');
  } catch (err) {
    console.error(err);
    res.redirect('/banks/new');
  }
});

// GET /banks/:id - Show details of a specific bank
router.get('/:id', async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);
    res.render('banks/show', { bank });
  } catch (err) {
    console.error(err);
    res.redirect('/banks');
  }
});

// GET /banks/:id/edit - Show edit form for a specific bank
router.get('/:id/edit', async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);
    res.render('banks/edit', { bank });
  } catch (err) {
    console.error(err);
    res.redirect('/banks');
  }
});

// PUT /banks/:id - Update a specific bank
router.put('/:id', async (req, res) => {
  try {
    const { bankCode, ...updateData } = req.body;
    await Bank.findByIdAndUpdate(req.params.id, updateData);
    res.redirect(`/banks/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/banks/${req.params.id}/edit`);
  }
});

// DELETE /banks/:id - Delete a specific bank
router.delete('/:id', async (req, res) => {
  try {
    await Bank.findByIdAndDelete(req.params.id);
    res.redirect('/banks');
  } catch (err) {
    console.error(err);
    res.redirect(`/banks/${req.params.id}`);
  }
});

module.exports = router;
