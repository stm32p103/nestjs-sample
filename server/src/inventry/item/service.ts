import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './entity';

@Injectable()
export class ItemService  {
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

    async findOneById( id: number ): Promise<Item> {
        return await this.repo.findOneOrFail( id );
    }
    
    async findAll(): Promise<Item[]> {
        return await this.repo.find();
    }

    async delete( ids: number[] ): Promise<void> {
        await this.repo.delete( ids );
    }
}
