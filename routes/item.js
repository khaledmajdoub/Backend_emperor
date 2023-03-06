import express from "express";
import { body } from "express-validator";

import { getAll, addOnce, getOnce, putOnce } from "../controllers/item.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    body("iditem").isLength({ min: 5 }),
    body("itemtype").isLength({ min: 5 }),
    body("craftable").isBoolean,
    body("usable").isBoolean,
    addOnce
  );

router
  .route("/:id")
  .get(getOnce)
  .put(
    body("iditem").isLength({ min: 5 }),
    body("itemtype").isLength({ min: 5 }),
    body("craftable").isBoolean,
    body("usable").isBoolean,
    putOnce
  );

export default router;
