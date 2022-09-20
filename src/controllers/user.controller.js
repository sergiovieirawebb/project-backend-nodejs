const express = require('express');

const router = express.Router();
const userService = require('../services/user.service');

router.get('/', async (req, res) => {
  const users = await userService.getAll();

  return res.status(200).json({
    userLogged: req.user,
    users,
  });
});

module.exports = router;
