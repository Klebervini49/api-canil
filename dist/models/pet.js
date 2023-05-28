"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/");
const server_1 = require("../server");
const PetController = {
    listarTodos: (res) => {
        if (data_1.listaAnimais.length === 0) {
            if (res) {
                return res.status(404).json({
                    message: "Nenhum animal encontrado"
                });
            }
        }
        if (res) {
            return ({
                message: "Todos os animais",
                animais: data_1.listaAnimais
            });
        }
    },
    listarTipo: (tipoAnimal, res) => {
        const racaAnimal = data_1.listaAnimais.filter(animal => animal.tipo === tipoAnimal);
        if (racaAnimal.length === 0) {
            if (res) {
                return res.status(404).json({
                    message: "Nenhum animal encontrado"
                });
            }
        }
        if (res) {
            return ({
                message: tipoAnimal.charAt(0).toUpperCase() + tipoAnimal.slice(1),
                animais: racaAnimal
            });
        }
    },
    listarRaca: (pesquisa, res) => {
        const listaAnimal = data_1.listaAnimais.filter(animal => {
            return animal.nome.toUpperCase().includes(pesquisa.toUpperCase());
        });
        if (listaAnimal.length === 0) {
            return res.status(404).send({
                message: "Nenhum animal encontrado"
            });
        }
        return ({
            message: pesquisa,
            animais: listaAnimal
        });
    },
    notFound: (res) => {
        res.status(404).sendFile("error.html", {
            root: server_1.DirPublic
        });
    }
};
exports.default = PetController;
