import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASS as string,
  {
    host: process.env.MYSQL_HOST as string,
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT as string),
    define: {
      timestamps: true
    }
  }
);