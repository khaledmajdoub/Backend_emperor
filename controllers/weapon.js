import { validationResult } from "express-validator";
import weapon from "../models/weapon.js";

export function getAll(req, res) {
  weapon
    .find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          idweapon: docs[i].idweapon,
          nameweapon: docs[i].nameweapon,
          description: docs[i].description,
          typeweapon: docs[i].typeweapon,
          bonusweapon: docs[i].bonusweapon,
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
    weapon
      .create({
        idweapon: req.body.idweapon,
        nameweapon: req.body.nameweapon,
        description: req.body.description,
        typeweapon: req.body.typeweapon,
        bonusweapon: req.body.bonusweapon,
      })
      .then((newWeapon) => {
        res.status(200).json({
          idweapon: newWeapon.idweapon,
          nameweapon: newWeapon.nameweapon,
          description: newWeapon.description,
          typeweapon: newWeapon.typeweapon,
          bonusweapon: newWeapon.bonusweapon,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getOnce(req, res) {
  weapon
    .findById(req.params.idweapon)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putOnce(req, res) {
  let newWeapon = {};
  if (req.file == undefined) {
    newWeapon = {
      idweapon: req.body.idweapon,
      nameweapon: req.body.nameweapon,
      description: req.body.description,
      typeweapon: req.body.typeweapon,
      bonusweapon: req.body.bonusweapon,
    };
  } else {
    newWeapon = {
      idweapon: newWeapon.idweapon,
      nameweapon: newWeapon.nameweapon,
      description: newWeapon.description,
      typeweapon: newWeapon.typeweapon,
      bonusweapon: newWeapon.bonusweapon,
    };
  }
  weapon
    .findByIdAndUpdate(req.params.id, newWeapon)
    .then((doc1) => {
      weapon
        .findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
