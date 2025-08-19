import databaseConnection from "../database/index.js";

const tableName = 'user';

class UserModel {
    findAll() {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM ${tableName}
            `;

            databaseConnection(query, (res) => {
                resolve(res);
            });
        });
    }

    findOneByEmail(email) {
        return new Promise((resolve, reject) => {
            const query = `
            SELECT * FROM ${tableName}
            WHERE email = '${email}'
        `;

            databaseConnection(query, (res) => {
                resolve(res);
            });
        });
    }

    insert(data) {
        const { email, name, password, accessToken, refreshToken } = data;

        return new Promise((resolve, reject) => {
            const query = `
                INSERT INTO ${tableName}
                    (email, name, password, accesstoken, refreshtoken)
                VALUES ('${email}', '${name}', '${password}', '${accessToken}', '${refreshToken}')
            `;

            databaseConnection(query, (res) => {
                resolve(res);
            });
        });
    }

    updateTokens(data) {
        const { email, accessToken, refreshToken } = data;

        return new Promise((resolve, reject) => {
            const query = `
                UPDATE ${tableName}
                SET accesstoken = '${accessToken}', refreshtoken = '${refreshToken}'
                WHERE email = '${email}'
            `;

            databaseConnection(query, (res) => {
                resolve(res);
            });
        });
    }
}

export default new UserModel();