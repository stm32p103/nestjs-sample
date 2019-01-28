import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entities, Controllers, Services } from './aggregation';

function ToArray( obj: Object ) {
    return Object.keys( obj ).map( key => obj[key] );
}

@Module( {
    imports: [ TypeOrmModule.forFeature( Entities ) ],
    providers: Services,
    controllers: Controllers,
} )
export class InventryModule {
    static readonly Entities = Entities;
    constructor() {
    }
}
