const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Users = db.Users;

const usersApiController = {
    list: async (req, res) => {
        const usersList = await db.Users.findAll({
			include: ['addresses']
		});
		const responseData = {
			meta:{
				status: 200,
				total: usersList.length,
				url: req.originalUrl
			},
			data: usersList
		}
        return res.json(responseData)
	},
	detail: async (req, res) => {
        const usersDetail = await db.Users.findByPk(req.params.id);
		const responseData = {
			meta:{
				status: 200,
				total: usersDetail.length,
				url: req.originalUrl
			},
			data: usersDetail
		}
        return res.json(responseData)
    },
}

module.exports = usersApiController;