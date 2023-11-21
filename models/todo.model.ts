import { Model, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize/types';

export class Todo extends Model {
  public id!: number;
  public title!: string;
}

export const initUserModel = (sequelize: Sequelize) => {
  Todo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Todos', //  table name
      modelName: 'Todo', //  model name
      timestamps: true,
    },
  );
};
