import { DB_PROVIDER } from './../constants';

import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/quiz'),
  },
];