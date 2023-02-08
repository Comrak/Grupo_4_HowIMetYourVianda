const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.Products;

const productsApiController = {
    list: async (req, res) => {
        const productsList = await db.Products.findAll();
		const responseData = {
			meta:{
				status: 200,
				total: productsList.length,
				url: req.originalUrl
			},
			data: productsList
		}
        return res.json(responseData)
	},
	detail: async (req, res) => {
        const productsDetail = await db.Products.findByPk(req.params.id);
		const responseData = {
			meta:{
				status: 200,
				total: productsDetail.length,
				url: req.originalUrl
			},
			data: productsDetail
		}
        return res.json(responseData)
    },
}

module.exports = productsApiController;