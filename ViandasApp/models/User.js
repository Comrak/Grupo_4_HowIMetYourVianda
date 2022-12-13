
const fs = require('fs');

const path = require('path');

const UserFilePath = path.resolve('./models/users.json');

const User = {

    fileName: UserFilePath,

    getData: function () {
        // Get data from json convert to array
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function () {

        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1
    },   

    findAll: function () {
        // Return all users
        return this.getData();
    },

    findByPk: function (id) {
        // Return user by id
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;

    },

    findByField: function (field, text) {
        // Return user by field
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        // Create a new user
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(), // Get the last id and add 1
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        // Delete a user
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    },

    update: function (id, userData) {
        // Update a user
        let allUsers = this.findAll();
        let finalUsers = allUsers.map(oneUser => {
            if (oneUser.id === id) {
                return {
                    ...oneUser,
                    ...userData
                }
            }
            return oneUser;
        });
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
}
}
module.exports = User;