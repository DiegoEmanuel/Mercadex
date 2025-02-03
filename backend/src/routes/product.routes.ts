import { Router, Request, Response } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

// Definindo os tipos para os handlers
type RequestHandler = (req: Request, res: Response) => Promise<void>;

// Convertendo os métodos do controller para handlers do Express
const create: RequestHandler = async (req, res) => {
    await ProductController.create(req, res);
};

const findAll: RequestHandler = async (req, res) => {
    await ProductController.findAll(req, res);
};

const findOne: RequestHandler = async (req, res) => {
    await ProductController.findOne(req, res);
};

const update: RequestHandler = async (req, res) => {
    await ProductController.update(req, res);
};

const remove: RequestHandler = async (req, res) => {
    await ProductController.delete(req, res);
};

// Registrando as rotas com os handlers tipados
router.post("/products", create);
router.get("/products", findAll);
router.get("/products/:id", findOne);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router; 