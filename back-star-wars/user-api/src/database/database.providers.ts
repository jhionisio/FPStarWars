/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'Joao1404',
        database: 'mydb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false, // Dont use it during production
        logging: false
      }),
  },
];
