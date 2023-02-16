import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('notes', 'gosha', 'ggrttr', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
}
);
const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
)
await User.sync()

export default sequelize
