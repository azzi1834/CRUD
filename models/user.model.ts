import { Model, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize/types';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public age!: number;
  public password!: string;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Users', //  table name
      modelName: 'User', //  model name
      timestamps: true,
    },
  );
};
