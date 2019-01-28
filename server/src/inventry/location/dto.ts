import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';

export class LocationDto {
    @ApiModelProperty( {
        required: false
    } )
    name?: string;

    @ApiModelProperty( {
        required: false
    } )
    description?: string;
}
