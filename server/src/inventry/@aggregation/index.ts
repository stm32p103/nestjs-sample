import * as _Entities from './entities';
import * as _Services from './services';
import * as _Controllers from './controllers';

function ToArray( obj: Object ) {
    return Object.keys( obj ).map( key => obj[key] );
}

export const Entities = ToArray( _Entities );
export const Services = ToArray( _Services );
export const Controllers = ToArray( _Controllers );
