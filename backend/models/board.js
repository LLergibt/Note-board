import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './dbConnect.js';

export const Boards = sequelize.define(
  'boards',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    }

  }
)
export const Types = sequelize.define(
  'types',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    }
  }
)
