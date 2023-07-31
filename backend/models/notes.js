import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from './dbConnect.js';
import {Types, Boards} from './board.js'


export const PropertyTitle = sequelize.define(
  'property',
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
      defaultValue: "Без названия",
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
    timestamps: false,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: "Без названия",
    },
    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boards,
        key: 'id'
      }

    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE

  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
)
export const PropertyNote = sequelize.define(
  'property_note',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: PropertyTitle,
        key: 'id'
      }
    },
    note_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Note,
        key: 'id'
      }
    },
    data: {
      type: DataTypes.STRING,
    },
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
      primaryKey: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

export const ChoosePropertyNote = sequelize.define(
  'choose_property_note',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    property_note_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: PropertyNote,
        key: 'id'
      }
  },
    choose_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Choose,
        key: 'id'
      }
  }
  },

  {
    timestamps: false
}
)
