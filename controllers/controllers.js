const express = require('express');
const models = require('../models/models.js');


const get = (req, res) => {
  models.get().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err))
};

const getProduct = (req, res) => {
  models.getProduct().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err))
};

const getStyles = (req, res) => {
  models.getStyles().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err))
};

const getRelated = (req, res) => {
  models.getRelated().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err))
};


module.exports = {get, getProduct, getStyles, getRelated};

