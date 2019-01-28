import { ApiModelProperty, ApiResponse } from '@nestjs/swagger';

export class GetQueryDto {
    @ApiModelProperty( {
        required: false
    } )
    join?: string;
}
