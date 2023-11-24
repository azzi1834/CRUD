import { Model } from 'sequelize';
import { Sequelize } from 'sequelize/types';
export declare class Todo extends Model {
    id: number;
    title: string;
}
export declare const initUserModel: (sequelize: Sequelize) => void;
