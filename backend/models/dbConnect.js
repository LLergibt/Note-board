import { Sequelize, Model, DataTypes } from 'sequelize';
import redis from 'redis'

const sequelize = new Sequelize('notes', 'gosha', 'ggrttr', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
}

);
export const redisClient = redis.createClient({
    host:'127.0.0.1',
    port:6379
})
await redisClient.connect();

export default sequelize
