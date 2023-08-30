import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './dbConnect.js';
import {Boards} from './board.js'
import {User} from './auth.js'
import {PropertyTitle} from './notes.js'

export const SortsProperty = sequelize.define(
  'sorts_property',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: PropertyTitle,
        key: 'id'
      }
    },
    isToggled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    board_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Boards,
        key: 'id'
      }
    }
  },
  {
    timestamps: false
  }
)
export const SortsGroupBy = sequelize.define(
  'sorts_group_by',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: PropertyTitle,
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    board_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Boards,
        key: 'id'
      }
    }
    
  }
)
