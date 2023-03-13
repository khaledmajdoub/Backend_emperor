import { validationResult } from "express-validator";
import Outfit from "../models/outfit.js";

export function getAll(req, res) {
  Outfit.find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          outfitname: docs[i].outfitname,
          outfitdescription: docs[i].outfitdescription,
          outfitbonus: docs[i].outfitbonus,
        });
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json({ errors: validationResult(req).array() });
  } else {
    Outfit.create({
      outfitname: req.body.outfitname,
      outfitdescription: req.body.outfitdescription,
      outfitbonus: req.body.outfitbonus,
    })
      .then((newOutfit) => {
        res.status(200).json({
          outfitname: newOutfit.outfitname,
          outfitdescription: newOutfit.outfitdescription,
          outfitbonus: newOutfit.outfitbonus,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}
