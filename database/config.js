import dotenv from "dotenv";
dotenv.config();
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
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
