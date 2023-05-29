"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instances/mysql");
exports.Animal = mysql_1.sequelize.define('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    cor: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    genero: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    img: {
        type: sequelize_1.DataTypes.STRING(200),
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING(50),
    },
}, {
    tableName: 'animais',
    timestamps: true,
});
