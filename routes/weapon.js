import express from "express";
import { body } from "express-validator";

import { getAll, addOnce, getOnce, putOnce } from "../controllers/weapon.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    body("idweapon"),
    body("nameweapon").isLength({ min: 5 }),
    body("description"),
    body("typeweapon"),
    body("bonusweapon"),
    addOnce
  );

router
  .route("/:id")
  .get(getOnce)
  .put(
    body("idweapon"),
    body("nameweapon").isLength({ min: 5 }),
    body("description"),
    body("typeweapon"),
    body("bonusweapon"),
    putOnce
  );

export default router;
