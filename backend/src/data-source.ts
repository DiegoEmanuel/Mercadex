import "dotenv/config";
import { DataSource } from "typeorm";
import { ProductModel } from "./models/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    entities: [ProductModel],
    synchronize: true,
    logging: false
}); 