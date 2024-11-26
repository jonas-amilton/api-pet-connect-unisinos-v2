import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  models: [__dirname + "/../models"],
  define: {
    underscored: true,
    freezeTableName: false,
  },
});

export default sequelize;
