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

import { EntityCommon } from '../common';
import { Location } from '../location/entity';

@Entity()
export class Item extends EntityCommon {
    @Column( { length: 128 } )
    name: string;
    
    @Column()
    description: string;
    
    @Column( { nullable: true } )
    locationId: number;
    
    @ManyToOne( type=>Location, location=>location.items )
    @JoinColumn( { name: 'locationId' } )
    readonly location?: Location;  // 設置場所

    constructor( init?: Partial<Item> ) {
        super();
        Object.assign( this, init );
    }
}
