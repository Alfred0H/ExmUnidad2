import { Pool } from 'pg';
import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Animal } from '../models/models-animal';
import { Fruit } from '../models/models-fruit';
import { Country } from '../models/models-countries';
import { SmartPhone } from '../models/models-smartphone';


class Connection {
    public connection: Sequelize;

    constructor(){

        dotenv.config();
        this.connection = new Sequelize({
            dialect:"postgres",
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            //port: 5432,
            logging: false,
            models: [
                Animal, Fruit, Country, SmartPhone
            ],
        })
    }
}



export const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
});

export default Connection;