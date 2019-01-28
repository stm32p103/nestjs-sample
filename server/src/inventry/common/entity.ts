import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

export function Joinable(): PropertyDecorator {
    return function( target: any, key: string ) {
        if( target.constructor.Joinables === undefined ) {
            target.constructor.Joinables = [];
        }
        target.constructor.Joinables.push( key );
    }
}

// https://qiita.com/M-ISO/items/7120db767cd539f1c58a#%E3%81%BE%E3%81%A8%E3%82%81typescript%E3%81%AEstatic%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E4%BF%AE%E9%A3%BE%E5%AD%90%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B4%E3%81%A4%E3%81%AE%E4%BA%8B

@Entity()
export class EntityCommon {
    static Joinables: string[];   // @Joinable()を付けることで、findでJoin可能であることを示す

    static FilterJoinable( keys: string[] ): string[] {
        return keys.filter( key => this.Joinables.indexOf( key ) >= 0 );
    }
    
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;
    
    constructor( init?: Partial<EntityCommon> ) {
        Object.assign( this, init );
    }
}
