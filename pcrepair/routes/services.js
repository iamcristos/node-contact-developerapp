const express = require('express');
const router = express.Router();
const fs= require('fs');

//reading the json file
let results
fs.readFile('json/services.json', 'utf8', (err,data)=>{
 if (err) {
     throw err
 } else {
    results= JSON.parse(data);
 }
})
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Our Services',
    services: results  
  });
});

module.exports = router;
