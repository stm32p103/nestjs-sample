import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';

export class ItemDto {
    @ApiModelProperty( {
        required: false
    } )
    name?: string;

    @ApiModelProperty( {
        required: false
    } )
    description?: string;
}

export class ItemCreateResult {
    id: number;
}
