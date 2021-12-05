const express = require('express');
const path = require('path');
const listProducts = require("../config/listProducts");

const adminController = {
    index:  (req, res) => {
        res.render("admin");
    },
    create:  (req, res) => {
        res.render("create");
    },
    listEdit:  (req, res) => {
        res.render("listEdit", {listProducts});
    },
    editProduct:(req, res)=>{
        let id = req.params.id;
        res.render('create', {})
    },
}

module.exports = adminController;