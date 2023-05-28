import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();
const server = express();
const port = process.env.PORT || 3000;

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
        url: `http://localhost:${port}`,
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
  apis: ['./src/routes/*.ts']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api/docs', swaggerUi.serve);

server.get('/api/docs', swaggerUi.setup(swaggerDocs, {
  explorer: true,
  customSiteTitle: 'Canil API Documentation',
  customCss: '.swagger-ui .topbar { display: none }'
}));

export const DirPublic = path.join(__dirname, "../public");
server.use(express.static(DirPublic));

server.use(router);

router.get("*", (req, res) => {
  res.status(404).sendFile("error.html", {
    root: DirPublic
  });
});

server.listen(port);
