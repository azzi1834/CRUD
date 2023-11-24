"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserModel = exports.Todo = void 0;
const sequelize_1 = require("sequelize");
class Todo extends sequelize_1.Model {
}
exports.Todo = Todo;
const initUserModel = (sequelize) => {
    Todo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'Todos',
        modelName: 'Todo',
        timestamps: true,
    });
};
exports.initUserModel = initUserModel;
//# sourceMappingURL=todo.model.js.map