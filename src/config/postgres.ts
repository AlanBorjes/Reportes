import { Client } from 'pg';
import Pool from 'pg-pool';
require('dotenv').config();

const config : Pool.Config<Client> = {
    database: process.env.DB_NAME,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: 5
};

const pool = new Pool(config);