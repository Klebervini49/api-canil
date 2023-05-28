import { Request, Response, NextFunction } from "express";

// Middleware para autenticação com token Bearer
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token de autenticação não fornecido" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(403).json({ message: "Token de autenticação inválido" });
  }

  if (token !== process.env.API_TOKEN) {
    return res.status(403).json({ message: "Token de autenticação inválido" });
  }

  next();
};