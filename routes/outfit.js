import express from "express";
import { body } from "express-validator";

import { getAll, addOnce } from "../controllers/outfit.js";

const router = express.Router();

router.route("/").get(getAll);

router.route("/addoutfit").post(
  body("outfitname").isLength({ min: 2 }),
  body("outfitdescription").isLength({ min: 2 }),
  body("outfitbonus").isLength({ min: 2 }),

  addOnce
);

export default router;
