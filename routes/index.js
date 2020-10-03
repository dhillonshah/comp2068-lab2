'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    
    //Calculator 
    var result = function calculate(method, x, y) {
        var z;

        if (method = add) {
            z = parseFloat(x) + parseFloat(y);
            return z;
        } else if (method = subtract) {
            z = parseFloat(x) - parseFloat(y);
            return z;
        } else if (method = multiply) {
            z = parseFloat(x) * parseFloat(y);
            return z;
        } else if (method = divide) {
            z = parseFloat(x) / parseFloat(y);
            return z;
        } else {
            throw "Use method from (add,subtract,multiply, divide)"
        }

        
    }
    console.log(req.query);
    console.log(req.query.x, req.query.method, req.query.y);
    console.log(result)

    res.render('index', { title: 'Express' });
});

module.exports = router;
