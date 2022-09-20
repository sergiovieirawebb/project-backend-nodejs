const express = require('express');

const router = express.Router();
const loginService = require('../services/login.service');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const login = await loginService.login(email, password);

  return res.status(200).json(login);
});

module.exports = router;
