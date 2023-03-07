import { Sequelize, Model, DataTypes } from 'sequelize';
import {User} from './auth.js'
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
    },
    owner: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
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
  },
  {
    timestamps: false
  }
)
