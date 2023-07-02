const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("password", "min length is 6 characters").isLength({ min: 5 }),
    body("email", "enter valid email id").isEmail(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .send("sorry a user with the entered email id already exists");
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({ error: "Please enter a unique val", message: err.message });
      //   });
      res.json({ Nice: "nice" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error has occured");
    }
  }
);

module.exports = router;
