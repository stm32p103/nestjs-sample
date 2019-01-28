import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';
import { Item } from './entity';

export class ItemDto {
    @ApiModelProperty( {
        required: false
    } )
    name?: string;

    @ApiModelProperty( {
        required: false
    } )
    description?: string;

    @ApiModelProperty( {
        required: false
    } )
    locationId?: number;
}
