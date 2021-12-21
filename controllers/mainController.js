//utilisation du constructeur
let rooms = require('../models/userModel');

//utilisation de Mysql
var mysql = require('mysql');
const { contentType } = require('express/lib/response');

//utilisation de la databse de Mysql
var database = mysql.createConnection(
    {
    host: 'localhost',
    user : 'root',
    password: 'root',
    database : 'examen' // changement de nom = risque d'erreur donc je garderais celle-ci
    });
database.connect(function(error) {if (error) console.log(error);});



//liste vide qui contiendra les formations sub temporairement
ListeP = []

//Redirect simple vers Site pour faciliter accès
module.exports.Redirect = function(req, res)
{res.redirect('/Site');}

//redirect Site officiel
module.exports.Site = function(req, res) 
{res.sendfile('./views/connection.html');}

module.exports.SiteAdd = function(req, res)
{

    var name = req.body.name;
    var length = req.body.length;
    var width = req.body.width;
    database.query("INSERT INTO rooms (name, length, width) VALUES (?,?,?)",[name, length, width],
        (error, result) =>
    {
        if(error) 
            {console.log(error);}
        else
        {
            res.redirect('/Site/Listing');
        }
    });
}

module.exports.SiteListing = function(req, res) 
{
ListeP = [];
    database.query("SELECT * from rooms", (error, result) =>
    {
        if(error) 
            {console.log(error);}
        else
        {
            ListeP = result;
            ListeT = 0; 
            for (let i = 0; i < result.length; i++) {
                length = result[i].length;
                width = result[i].width;
                ListeT += (length*width);
                console.log(ListeT);
            }
            //let arr1 = ListeP;
            //llet arr2 = ListeT;
            //llet primes = arr1.concat(arr2);
            //lconsole.log("prime" + primes);
            //lres.render('Listing.ejs', {data: {piece: primes[0], total: primes[1]}});
            res.render('Listing.ejs', {piece: ListeP});
        }
    });
}

