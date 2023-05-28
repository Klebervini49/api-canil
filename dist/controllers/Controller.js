"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotas = void 0;
const pet_1 = __importDefault(require("../models/pet"));
exports.Rotas = {
    Home: (req, res) => res.send("Bem vindo a API do Canil!"),
    HomeAll: (req, res) => res.send(pet_1.default.listarTodos(res)),
    HomeAnimal: (req, res) => res.send(pet_1.default.listarTipo(req.params.animal, res)),
    HomeSearch: (req, res) => res.send(pet_1.default.listarRaca(req.params.pesquisa, res)),
};
