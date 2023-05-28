"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const Controller_1 = require("../controllers/Controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/tipo/:
 *   get:
 *     summary: Obtém todos os animais
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de animais.
 *       401:
 *         description: Não autorizado. O token de autenticação não foi fornecido ou é inválido.
 *       404:
 *         description: Nenhum animal encontrado.
 *
 * /api/tipo/{animal}:
 *   get:
 *     summary: Obtém todos os animais de um tipo específico
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: animal
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de animais.
 *       401:
 *         description: Não autorizado. O token de autenticação não foi fornecido ou é inválido.
 *       404:
 *         description: Nenhum animal encontrado.
 *
 * /api/pesquisa/{pesquisa}:
 *   get:
 *     summary: Pesquisa os animais pelo nome
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: pesquisa
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso. Retorna a lista de animais.
 *       401:
 *         description: Não autorizado. O token de autenticação não foi fornecido ou é inválido.
 *       404:
 *         description: Nenhum animal encontrado.
 *
 * securityDefinitions:
 *   BearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 *     description: Token de autenticação Bearer.
 */
router.get("/api/tipo", middleware_1.authenticateToken, Controller_1.Rotas.HomeAll);
router.get("/api/tipo/:animal", middleware_1.authenticateToken, Controller_1.Rotas.HomeAnimal);
router.get("/api/pesquisa/:pesquisa", middleware_1.authenticateToken, Controller_1.Rotas.HomeSearch);
exports.default = router;
