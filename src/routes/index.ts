import { Router } from "express";
import { authenticateToken } from "../middleware";
import { Rotas } from "../controllers/Controller";

const router = Router();

router.get("/api/", Rotas.Home);

router.get("/api/tipo", authenticateToken, Rotas.HomeAll);

router.get("/api/tipo/:animal", authenticateToken, Rotas.HomeAnimal);

router.get("/api/pesquisa/:pesquisa", authenticateToken, Rotas.HomeSearch);

export default router;
