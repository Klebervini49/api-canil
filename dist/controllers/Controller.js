"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotas = void 0;
const Animais_1 = require("../models/Animais");
exports.Rotas = {
    Home: (req, res) => res.send({
        message: "Bem vindo a API do Canil!",
        doc: "/api/docs",
    }),
    HomeAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let animais = yield Animais_1.Animal.findAll();
        res.send({
            message: "Todos os animais",
            animais: animais,
            quantidade: animais.length
        });
    }),
    HomeAnimal: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let animais = yield Animais_1.Animal.findAll();
        const tipoAnimal = req.params.animal;
        const racaAnimal = animais.filter(animal => animal.tipo === tipoAnimal);
        if (racaAnimal.length === 0) {
            return res.status(404).json({
                message: "Nenhum animal encontrado"
            });
        }
        res.send({
            message: tipoAnimal.charAt(0).toUpperCase() + tipoAnimal.slice(1),
            animais: racaAnimal,
            quantidade: racaAnimal.length
        });
    }),
    HomeSearch: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let animais = yield Animais_1.Animal.findAll();
        const pesquisa = req.params.pesquisa;
        const listaAnimal = animais.filter(animal => {
            return animal.nome.toUpperCase().includes(pesquisa.toUpperCase());
        });
        if (listaAnimal.length === 0) {
            return res.status(404).send({
                message: "Nenhum animal encontrado"
            });
        }
        res.send({
            message: pesquisa,
            animais: listaAnimal,
            quantidade: listaAnimal.length
        });
    }),
};
