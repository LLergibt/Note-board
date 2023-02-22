import sequelize from './dbConnect.js';
import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'

export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
      hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
            }
    }


  }
)

