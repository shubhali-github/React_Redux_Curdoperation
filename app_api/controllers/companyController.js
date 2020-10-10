const express = require("express");
var router = express.Router();
var ObjectID = require("mongoose").Types.ObjectId;

var { Company } = require("../models/modal");

router.get("/", (req, res) => {
  Company.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieving all records : " +
          JSON.stringify(err, undefined, 2)
      );
  });
});

router.post("/", (req, res) => {
  var newRecord = new Company({
    name: req.body.name,
    description: req.body.description,
    contact_no:req.body.contact_no,
    email:req.body.email,
    logo:req.body.logo,
    state:req.body.state,
    city:req.body.city,

  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while creating new record : " + JSON.stringify(err, undefined, 2)
      );
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  var updatedRecord = {
    name: req.body.name,
    description: req.body.description,
    contact_no: req.body.contact_no,
    email: req.body.email,
    logo: req.body.logo,
    state: req.body.state,
    city: req.body.city,
  };

  Company.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record : " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  Company.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while deleting a record : " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
