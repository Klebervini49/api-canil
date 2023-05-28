import { Response } from "express";
import { listaAnimais } from "../data/";

const PetController = {
  listarTodos: (res: Response) => {
    if (listaAnimais.length === 0) {
      if (res) {
        return res.status(404).json({
          message: "Nenhum animal encontrado"
        });
      }
    }
    if (res) {
      return ({
        message: "Todos os animais",
        animais: listaAnimais
      });
    }
  },
  listarTipo: (tipoAnimal: string, res: Response) => {
    const racaAnimal = listaAnimais.filter(animal => animal.tipo === tipoAnimal);

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
  listarRaca: (pesquisa: string, res: Response) => {
    const listaAnimal = listaAnimais.filter(animal => {
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
  }
};

export default PetController;
