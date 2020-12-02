import dotenv from "dotenv";
dotenv.config();
module.exports = {
  "development": {
    use_env_variable: true,
    // "url": "mysql://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASENAME,
    "url": "mysql://ishopz:Gg4DQV!!K03j@den1.mysql2.gear.host:3306/ishopz",
    "dialect": "mysql",
    "timezone": "+07:00" //for writing to database
  },
  "local": {
    use_env_variable: true,
    "url": "mysql://" + process.env.DBLOCAL_USERNAME + ":" + process.env.DBLOCAL_PASSWORD + "@" + process.env.DBLOCAL_HOST + ":" + process.env.DBLOCAL_PORT + "/" + process.env.DBLOCAL_DATABASENAME,
    "dialect": "mysql",
    "timezone": "+07:00" //for writing to database
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
