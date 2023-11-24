import { Model } from 'sequelize';
import { Sequelize } from 'sequelize/types';
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
}
export declare const initUserModel: (sequelize: Sequelize) => void;
