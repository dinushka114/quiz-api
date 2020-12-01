import { USER_PROVIDER, DB_PROVIDER } from './../constants';
import { UserSchema } from './../schemas/user.schema';
import { Connection } from 'mongoose';

export const userProviders = [
  {
    provide: USER_PROVIDER,
    useFactory: (connection: Connection) => connection.model('User' , UserSchema),
    inject: [DB_PROVIDER],
  },
];