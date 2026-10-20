"use strict";

const fs = require("fs");
const path = require("path");
const sequelize = require("../connection");
const db = {};

// Carrega automaticamente todos os arquivos *.model.js da pasta
fs.readdirSync(__dirname)
    .filter((file) => file !== "index.js" && file.endsWith(".model.js"))
    .forEach((file) => {
        const model = require(path.join(__dirname, file));
        db[model.name] = model;
    });

// Chama associate em cada model que definir o método
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = require("sequelize").Sequelize;

module.exports = db;
