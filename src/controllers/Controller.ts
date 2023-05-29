import { Request, Response } from "express";
import Pet from "../models/pet";
import { Animal } from "../models/Animais";

export const Rotas = {
  Home: (req: Request, res: Response) => res.send({
    message: "Bem vindo a API do Canil!",
    doc: "/api/docs",
  }),
  HomeAll: async (req: Request, res: Response) => {
    let animais = await Animal.findAll();

    res.send({
      message: "Todos os animais",
      animais: animais,
      quantidade: animais.length
    })
  },
  HomeAnimal: async (req: Request, res: Response) => {
    let animais = await Animal.findAll();
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
    })

  },
  HomeSearch: async (req: Request, res: Response) => {
    let animais = await Animal.findAll();
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
    })
  },
}
