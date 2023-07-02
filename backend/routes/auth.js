const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "min length of password is 5").isLength({ min: 5 }),
    body("email", "enter valid email address").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      username: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then((user) => res.json(user));
    res.send(req.body);
  }
);

module.exports = router;
