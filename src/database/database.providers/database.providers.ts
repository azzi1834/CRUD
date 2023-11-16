import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '56connections78',
        database: 'myDatabase',
        logging: console.log,
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to
       * Sequelize later on.
       */
      sequelize
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        });

      await sequelize.sync();
      return sequelize;
    },
  },
];
