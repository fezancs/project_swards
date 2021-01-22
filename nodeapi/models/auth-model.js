var express = require('express');
var router = express.Router();
var authModel = require('../models/auth-model');
var db = require("../db");
var passport = require('passport');
var jwt = require('jsonwebtoken');
let model = {
    signup: (input, cb) => {

        let data = {
            admin_name: input.name,
            admin_password:input.password
        };
        
        return db.query("INSERT INTO admin SET ?", [data], cb)
    },
    findOne: (adminname, cb) => {
        return db.query("SELECT * FROM admin WHERE admin_name=?", [adminname], cb);
    },
    findById: (admin_id, cb) => {
        return db.query("SELECT * FROM admin WHERE admin_id=? ", [admin_id], cb);
    }
}



module.exports = model;