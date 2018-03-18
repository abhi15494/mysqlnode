const express = require("express");
const router = express.Router();

const customer = require("../model/customer_model");

router.get("/", function(req, res, next){
    customer.getAllCustomer(function(err, rows){
        if(err) res.json(err);
        else res.json(rows);
    });
});

router.post("/", function(req, res, next){
    customer.addCustomer(req.body, function(err, rows){
        if(err) res.json(err);
        else res.json(rows);
    });
});

router.put("/:id", function(req, res, next){
    customer.updateCustomer(req.params.id, req.body, function(err, rows){
        if(err) res.json(err);
        else res.json(rows);
    });
});

router.delete("/:id", function(req, res, next){
    customer.deleteCustomer(req.params.id, function(err, rows){
        if(err) res.json(err);
        else res.json(rows);
    });
});

module.exports = router;