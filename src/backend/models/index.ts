// Belum kepakek error terus hehe

// import * as fs from 'fs';
// import * as path from 'path';
// import { Sequelize, DataTypes, Dialect } from 'sequelize';
// // import process from 'process';
// import dotenv from 'dotenv';
// dotenv.config();

// // const allowedDialects: Dialect[] = ['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'];
// const basename = path.basename(__filename);
// const db: any = {};

// if (!process.env.DB_NAME || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_DIALECT) {
//   throw new Error('One or more environment variables are not set.');
// }

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT as Dialect,
//   }
// );

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;


