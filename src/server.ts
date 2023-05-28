import express, { Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();
const server = express();

server.use(express.json());
server.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Canil API',
      version: '1.0.0',
      description: 'API que retorna dados de animais de um canil',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

server.use('/api/docs', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) => {
  const swaggerDocsModified = JSON.parse(JSON.stringify(swaggerDocs));
  swaggerDocsModified.components = {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  };
  swaggerUi.setup(swaggerDocsModified, {
    explorer: true,
    customSiteTitle: 'Canil API Documentation',
    customCss: '.swagger-ui .topbar { display: none }'
  })(req, res, next);
});

const port = process.env.PORT || 3000;

export const DirPublic = path.join(__dirname, "../public");
server.use(express.static(DirPublic));

// Rotas
server.use(router);

server.listen(port, () => {
  console.clear();
  console.log(`Server is running on http://localhost:${port}`);
});
