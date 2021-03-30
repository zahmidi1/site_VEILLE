var express = require('express');  
var app = express();  
fs = require('fs');
app.get('/myform', function(req, res){  
    let myObject={
        Titre:req.query.Titre,
        Réailiser:req.query.Réailiser,
        date_exposé:req.query.date_exposé,
        line:req.query.line
      
      }
    let data = fs.readFileSync('veille1.json');
    let users = JSON.parse(data);
    users.push(myObject);
    fs.writeFile('veille1.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);
      });
      res.redirect('http://127.0.0.1:5500/vielle.html')
    
});  
app.listen(3000)

