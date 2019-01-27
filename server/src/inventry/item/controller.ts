import { Get, Post, Patch, Delete, Body, Controller, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { ItemDto, ItemCreateResult } from './dto';
import { Item } from './entity';
import { ItemService } from './service';

@ApiUseTags('Items')
@Controller('items')
export class ItemController {
    constructor(private readonly items: ItemService ) {}
    @Get()
    async findAll():  Promise<Item[]> {
        return await this.items.findAll();
    }

    @Get(':id')
    async getById( @Param('id') id: number ):  Promise<Item> {
        try {
            return await this.items.findOneById( id );
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
