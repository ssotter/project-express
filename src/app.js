import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/error.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares globais
// Configuração do Helmet com CSP personalizado
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "code.jquery.com", "cdn.jsdelivr.net"],
      styleSrc: ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "blob:"],
      fontSrc: ["'self'", "data:"],
    },
  },
}));
app.use(cors()); // libera acesso de outras origens
app.use(express.json()); // permite JSON no body
app.use(morgan("dev")); // log de requisições no console
app.use(express.static(path.join(__dirname, "../public"))); // Para pagina de cadastro usuarios

// Rotas
app.use("/api", routes);

// Rota 404 (não encontrada)
app.use((req, res) => res.status(404).json({ error: "Not Found" }));

// Tratamento central de erros
app.use(errorMiddleware);

export default app;
