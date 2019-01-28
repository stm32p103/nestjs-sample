import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

export function Joinable(): PropertyDecorator {
    return function( target: any, key: string ) {
        if( target.joinables === undefined ) {
            target.joinables = [];
        }
        target.joinables.push( key );
    }
}

@Entity()
export class EntityCommon {
    joinables: string[];
    
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
