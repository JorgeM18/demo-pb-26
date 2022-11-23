// @ts-nocheck
const path = require('path');
const authRoutes = require('./auth/auth.routes');
const express = require('express');

const router = express.Router();

//Routes
router.use('/auth', authRoutes);

router.get('/', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/login.html'));
});

router.get('/signup', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/signup.html'));
});

router.get('/profile', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/profile.html'));
});

router.get('/logout', (req, res, next) => {

});

module.exports = router;