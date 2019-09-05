var express = require('express');
var Inventory = require('../models').Inventory;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all inventories');
    Inventory.findAll().then(inventories => {
        res.json(inventories);
    });
});

router.get('/:id', function(req, res){
    console.log('getting one inventory');
    Inventory.findById(req.params.id).then(inventory => {
        console.log(inventory);
        res.json(inventory);
    });
    /* another ways to do it
    Book.findOne({ where: {id: req.params.id} }).success(inventory => {
        console.log(inventory);
        res.json(inventory);
    }).error(err => {
        res.send('error has occured');
    });
    */
});

router.post('/', function(req, res){
    console.log(req.body);
    Inventory.create({
        item: req.body.item,
        make: req.body.make,
        description: req.body.description,
        serialNo: req.body.serialNo,
        quantity: req.body.quantity,
        value: req.body.value
    }).then(inventory => {
        console.log(inventory.get({
          plain: true
        }));
        res.send(inventory);
    });
});

router.put('/:id', function(req, res){
    Inventory.update({
        item: req.body.item,
        make: req.body.make,
        description: req.body.description,
        serialNo: req.body.serialNo,
        quantity: req.body.quantity,
        value: req.body.value
    },{ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
    Inventory.destroy({
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;
