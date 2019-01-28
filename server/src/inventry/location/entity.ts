import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToMany,
    ManyToOne
} from 'typeorm';

import { EntityCommon, Joinable } from '../common';
import { Item } from '../item/entity';

@Entity()
export class Location extends EntityCommon {
    @Column( { length: 128 } )
    name: string;
    
    @Column()
    description: string;

    @Joinable()
    @OneToMany( type=>Item, item=>item.location )
    readonly items?: Item[];  // 置かれている備品
    
    constructor( init?: Partial<Location> ) {
        super();
        Object.assign( this, init );
    }
}
