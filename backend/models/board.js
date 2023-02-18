import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './dbConnect.js';

export const Boards = sequelize.define(
  'Board',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    }

  }
)
export const Types = sequelize.define(
  'Type',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    }
  }
)
