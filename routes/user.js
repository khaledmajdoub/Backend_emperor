import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { getAll, signin, signup, putOnce } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(getAll);

router.route("/signin").post(
  body("username").isLength({ min: 5 }),
  multer("avatar", 5 * 1024 * 1024),
  body("password").isLength({ min: 5 }),
  body("UserPhoneNumber").isNumeric(),

  signin
);

router
  .route("/signup")
  .post(
    body("username").isLength({ min: 5 }),
    multer("avatar", 5 * 1024 * 1024),
    signup
  );

router
  .route("/:id")
  .put(
    multer("avatar", 5 * 1024 * 1024),
    body("username").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
    body("UserPhoneNumber").isNumeric(),
    putOnce
  );

export default router;
