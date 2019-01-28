import { Get, Post, Patch, Delete, Body, Controller, Param, HttpException, HttpStatus, Query, Optional } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { GetQueryDto } from '../common/dto';
import { ItemDto } from './dto';
import { Item } from './entity';
import { ItemService } from './service';

@ApiUseTags('Items')
@Controller('items')
export class ItemController {
    constructor(private readonly items: ItemService ) {}
    @Get('/joinables')
    getJoinables(): string[] {
        return Item.Joinables;
    }
    
    @Get()
    async findAll( @Query() option?: GetQueryDto ):  Promise<Item[]> {
        let join = [];
        if( option && option.join ) {
            join = option.join.split(',');
        }
        return await this.items.findAll({ join: join });
    }

    @Get(':id')
    async getById( @Param('id') id: number, @Query() option?: GetQueryDto ):  Promise<Item> {
        let join = [];
        if( option && option.join ) {
            join = option.join.split(',');
        }
        
        try {
            return await this.items.findOneById( id, { join: join } );
        } catch( e ) {
            throw new HttpException( 'Entity Not Found', HttpStatus.NOT_FOUND );
        }
    }
    
    @Post()
    async create( @Body() dto: ItemDto ): Promise<Item> {
        let id = await this.items.create( new Item( dto ) );
        return this.items.findOneById( id );
    }

    @Patch(':id')
    async update( @Param('id') id: number, @Body() dto: ItemDto ): Promise<Item> {
        await this.items.update( id, new Item( dto ) );
        try {
            return await this.items.findOneById( id );
        } catch( e ) {
            throw new HttpException( 'Entity Not Found', HttpStatus.NOT_FOUND );
        }
    }

    @Delete(':id')
    async delete( @Param('id') id: number ): Promise<void> {
        return await this.items.delete( [ id ] );
    }
}
