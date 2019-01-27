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

//import { EntityCommon } from './common.entity';
//import { Location } from './location.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;
    
    @Column( { length: 128 } )
    name: string;
    
    @Column()
    description: string;

    constructor( init?: Partial<Item> ) {
        Object.assign(this, init);
    }
}

//@Entity()
//export class Photo {
//    @PrimaryGeneratedColumn()
//    readonly id?: number;
//
//    @CreateDateColumn()
//    readonly createdAt?: Date;
//
//    @UpdateDateColumn()
//    readonly updatedAt?: Date;
//    
//    @Column( { length: 128 } )
//    caption: string;
//
//    @Column( { length: 32 } )
//    file: string;
//    
//    @Column()
//    itemId: number;
//    
//    @OneToMany( type => Item, item => item.photos )
//    @JoinColumn({ name: 'itemId' })
//    item?: Item;
//    
//    constructor( init?: Partial<Photo> ) {
//        Object.assign(this, init);
//    }
//}
//
//@Column( { nullable: true } )
//lid?: number;
//
//@ManyToOne( type => Location, location => location.items )
//@JoinColumn( { name: 'lid' } )
//location?: Location;
