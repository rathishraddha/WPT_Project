import { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } from "../constants/DBConstants.js";
import { createConnection } from "mysql";

export const connection = createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});
