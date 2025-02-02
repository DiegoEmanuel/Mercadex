import "dotenv/config";
import { DataSource } from "typeorm";
import { Product } from "./entity/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    entities: [Product],
    synchronize: true,
    logging: false
}); 