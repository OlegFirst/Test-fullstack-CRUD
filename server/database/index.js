import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

export default (query, cb) => {
    const con =
        mysql.createConnection({
            host,
            user,
            password,
            database
        });
    const errorResponse = JSON.stringify([]);

    const closeConnection = () => {
        con.end(err => {
            if (err) {
                console.log('Close error ', err.message);
                cb(errorResponse);
            }
        });
    };

    try {
        con.connect(function (err) {
            try {
                con.query(query, function (err, result) {
                    if (err) throw err;
                    const data = JSON.stringify(result);
                    closeConnection();
                    cb(data ?? JSON.stringify([]));
                });
            } catch(err) {
                closeConnection();
                console.log('Database query error');
                cb(errorResponse);
            }
        });
    } catch(err) {
        console.log('Connection error: ', err);
    }
}