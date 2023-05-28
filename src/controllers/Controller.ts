import { Request, Response } from "express";
import Pet from "../models/pet";

export const Rotas = {
  Home: (req: Request, res: Response) => res.send({
    message: "Bem vindo a API do Canil!",
    doc: "/api/docs",
  }),
  HomeAll: (req: Request, res: Response) => res.send(Pet.listarTodos(res)),
  HomeAnimal: (req: Request, res: Response) => res.send(Pet.listarTipo(req.params.animal, res)),
  HomeSearch: (req: Request, res: Response) => res.send(Pet.listarRaca(req.params.pesquisa, res)),
}
