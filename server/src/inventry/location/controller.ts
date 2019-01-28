import { Get, Post, Patch, Delete, Body, Controller, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { LocationDto } from './dto';
import { Location } from './entity';
import { LocationService } from './service';

@ApiUseTags('Locations')
@Controller('locations')
export class LocationController {
    constructor(private readonly locations: LocationService ) {}
    @Get()
    async findAll():  Promise<Location[]> {
        return await this.locations.findAll();
    }

    @Get(':id')
    async getById( @Param('id') id: number ):  Promise<Location> {
        try {
            return await this.locations.findOneById( id );
        } catch( e ) {
            throw new HttpException( 'Entity Not Found', HttpStatus.NOT_FOUND );
        }
    }
    
    @Post()
    async create( @Body() dto: LocationDto ): Promise<Location> {
        let id = await this.locations.create( new Location( dto ) );
        return this.locations.findOneById( id );
    }

    @Patch(':id')
    async update( @Param('id') id: number, @Body() dto: LocationDto ): Promise<Location> {
        await this.locations.update( id, new Location( dto ) );
        try {
            return await this.locations.findOneById( id );
        } catch( e ) {
            throw new HttpException( 'Entity Not Found', HttpStatus.NOT_FOUND );
        }
    }

    @Delete(':id')
    async delete( @Param('id') id: number ): Promise<void> {
        return await this.locations.delete( [ id ] );
    }
}
