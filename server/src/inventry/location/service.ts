import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Location } from './entity';

@Injectable()
export class LocationService  {
    constructor( 
        @InjectRepository( Location ) private readonly repo: Repository<Location>
    ) {}

    async create( item: Partial<Location> ): Promise<number> {
        let result = await this.repo.insert( item );
        return result.identifiers[0].id;
    }

    async update( id: number, item: Partial<Location> ): Promise<void> {        
        await this.repo.update( id, item );
    }

    async findOneById( id: number ): Promise<Location> {
        return await this.repo.findOneOrFail( id );
    }
    
    async findAll(): Promise<Location[]> {
        return await this.repo.find();
    }

    async delete( ids: number[] ): Promise<void> {
        await this.repo.delete( ids );
    }
}
