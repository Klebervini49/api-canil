import { Request, Response } from "express";
import Pet from "../models/pet";

export const Rotas = {
  HomeAll: (req: Request, res: Response) => res.send(Pet.listarTodos(res)),
  HomeAnimal: (req: Request, res: Response) => res.send(Pet.listarTipo(req.params.animal, res)),
  HomeSearch: (req: Request, res: Response) => res.send(Pet.listarRaca(req.params.pesquisa, res)),
  NotFound: (req: Request, res: Response) => res.send(Pet.notFound(res))
}
