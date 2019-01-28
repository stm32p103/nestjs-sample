import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './entity';

@Injectable()
export class ItemService  {
    private filter( option?: { join?: string[] } ): string[] {
        let keys:string[] = [];
    console.log(option)
        if( option && option.join ) {
            keys = Item.FilterJoinable( option.join );
        }
        return keys;
    }
    
    constructor( 
        @InjectRepository( Item ) private readonly repo: Repository<Item>
    ) {}
    
    async create( item: Partial<Item> ): Promise<number> {
        let result = await this.repo.insert( item );
        return result.identifiers[0].id;
    }
    
    async update( id: number, item: Partial<Item> ): Promise<void> {        
        await this.repo.update( id, item );
    }
    
    async findOneById( id: number, option?: { join?: string[] } ): Promise<Item> {
        let keys = this.filter( option );
        return await this.repo.findOneOrFail( id, { relations: keys } );
    }
    
    async findAll( option?: { join?: string[] } ): Promise<Item[]> {
        let keys = this.filter( option );
        console.log(keys)
        return await this.repo.find( { relations: keys } );
    }
    
    async delete( ids: number[] ): Promise<void> {
        await this.repo.delete( ids );
    }
}
