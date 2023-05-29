import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { CssDocs } from "./data/cssInline";

dotenv.config();
const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(cors());

const DirPublic = path.join(__dirname, "../public");

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
        url: `http://api-canil.vercel.app/`
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: [`${DirPublic}/swagger.js`],
  tags: [
    {
      name: 'Rotas principais',
      description: 'Endpoints principais da API'
    }
  ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  explorer: true,
  customSiteTitle: 'Canil API Documentation',
  customCss: CssDocs
}));

server.use(express.static(DirPublic));
server.use(router);

server.get("*", (req, res) => {
  res.status(404).sendFile("error.html", {
    root: DirPublic
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
