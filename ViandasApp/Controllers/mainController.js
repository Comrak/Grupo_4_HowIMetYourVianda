const { json } = require('express');
const path = require('path');

const renderHome = (req, res) => {
    return res.render('home')
}

const renderAbout = (req, res) => {
    return res.render('about')
}

module.exports = {
    renderHome,
    renderAbout
}       