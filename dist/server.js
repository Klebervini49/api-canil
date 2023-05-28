"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirPublic = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
dotenv_1.default.config();
const server = (0, express_1.default)();
const port = process.env.PORT || 3000;
server.use(express_1.default.json());
server.use((0, cors_1.default)());
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
    apis: ['./src/routes/*.js']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
server.use('/api/docs', swagger_ui_express_1.default.serve);
server.get('/api/docs', (req, res) => {
    res.status(200).send(swagger_ui_express_1.default.generateHTML(swaggerDocs));
    swagger_ui_express_1.default.setup(swaggerDocs, {
        explorer: true,
        customSiteTitle: 'Canil API Documentation',
        customCss: '.swagger-ui .topbar { display: none }'
    });
});
exports.DirPublic = path_1.default.join(__dirname, "../public");
server.use(express_1.default.static(exports.DirPublic));
server.use(routes_1.default);
// router.get("*", (req, res) => {
//   res.status(404).sendFile("error.html", {
//     root: DirPublic
//   });
// });
server.listen(port);
