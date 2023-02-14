"use strict";
const config = require("config");
const dbConfig = config.get('db');
const typeOrmConfig = {
    type: process.env.DB_TYPE || dbConfig.type,
    host: process.env.POSTGRES_HOST || dbConfig.host,
    port: +process.env.POSTGRES_PORT || 5432,
    username: process.env.DB_USERNAME || dbConfig.username,
    password: process.env.DB_PASSWORD || dbConfig.password,
    database: process.env.POSTGRES_DB || dbConfig.database,
    entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
    migrationsRun: false,
    logging: true,
    migrationsTableName: "migration",
    migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
    synchronize: false,
    cli: {
        migrationsDir: 'src/migration'
    }
};
module.exports = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map