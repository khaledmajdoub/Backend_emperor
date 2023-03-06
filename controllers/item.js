import { validationResult } from "express-validator";

import Item from "../models/item.js";

export function getAll(req, res) {
  Item.find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          iditem: docs[i].iditem,
          itemtype: docs[i].itemtype,
          craftable: docs[i].craftable,
          usable: docs[i].usable,
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
    Item.create({
      iditem: req.body.iditem,
      itemtype: req.body.itemtype,
      craftable: req.body.craftable,
      usable: req.body.usable,
    })
      .then((newItem) => {
        res.status(200).json({
          iditem: newItem.iditem,
          itemtype: newItem.itemtype,
          craftable: newItem.craftable,
          usable: newItem.usable,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}

export function getOnce(req, res) {
  Item.findById(req.params.iditem)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putOnce(req, res) {
  let newItem = {};
  if (req.file == undefined) {
    newItem = {
      iditem: req.body.iditem,
      itemtype: req.body.itemtype,
      craftable: req.body.craftable,
      usable: req.body.usable,
    };
  } else {
    newItem = {
      iditem: newItem.iditem,
      itemtype: newItem.itemtype,
      craftable: newItem.craftable,
      usable: newItem.usable,
    };
  }
  Item.findByIdAndUpdate(req.params.id, newItem)
    .then((doc1) => {
      Item.findById(req.params.id)
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
