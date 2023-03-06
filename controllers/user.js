import User from "../models/user.js";

export function signin(req, res) {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function getAll(req, res) {
  User.find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          username: docs[i].username,
          password: docs[i].password,
          avatar: docs[i].avatar,
          UserPhoneNumber: doc[i].UserPhoneNumber,
        });
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function signup(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    avatar: req.body.avatar,
    UserPhoneNumber: req.body.UserPhoneNumber,
    avatar: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
  })
    .then((newUser) => {
      res.status(200).json({
        username: newUser.username,
        password: newUser.password,
        UserPhoneNumber: newUser.UserPhoneNumber,
        avatar: newUser.avatar,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putOnce(req, res) {
  let newUser = {};
  if (req.file == undefined) {
    newUser = {
      UserPhoneNumber: newUser.UserPhoneNumber,
      username: req.body.username,
      password: req.body.password,
    };
  } else {
    newUser = {
      UserPhoneNumber: newUser.UserPhoneNumber,
      username: newUser.username,
      password: newUser.password,

      avatar: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
    };
  }
  User.findByIdAndUpdate(req.params.id, newUser)
    .then((doc1) => {
      User.findById(req.params.id)
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
