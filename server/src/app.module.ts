import { Module } from '@nestjs/common';

import { InventryModule } from './inventry';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [ 
              TypeOrmModule.forRoot( {
                  type: 'sqlite',
                  database: 'db/inventry.db',
                  synchronize: true,
                  entities: [ ...InventryModule.Entities ]
              } ), InventryModule
          ],
    controllers: [],
    providers: [],
})
export class AppModule {}
