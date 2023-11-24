"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/**/*.entity.ts'],
    migrationsRun: true,
    migrationsTableName: 'migration',
    migrations: ['src/migrations/**/*.ts'],
});
//# sourceMappingURL=ormconfig.js.map