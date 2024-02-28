import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';

const port = Number(process.env.DB_PORT)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Product],
    synchronize: false,
    migrations: [`${__dirname}/**/migrations/*.{ts, js}`],

})