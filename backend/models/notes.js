import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './dbConnect.js';
import {Types, Boards} from './board.js'


export const PropertyTitle = sequelize.define(
  'property_title',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Types,
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
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

export const Note = sequelize.define(
  'note',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: PropertyTitle,
        key: 'id'
      }


    },
    property_data: {
      type: DataTypes.STRING,
    },
    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boards,
        key: 'id'
      }

    }


  }
)

export const Choose = sequelize.define(
  'choose',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: PropertyTitle,
        key: 'id'
      }
  }
  },

  {
    timestamps: false
  }
)
