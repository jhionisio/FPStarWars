/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: DataSource) =>
            connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    },
];