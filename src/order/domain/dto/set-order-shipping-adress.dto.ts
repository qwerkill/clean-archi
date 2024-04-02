import {  IsNotEmpty, IsString, IsUUID } from "class-validator";

export class SetOrderShippingAdressDto {
    @IsNotEmpty()
    @IsUUID()
    orderId: string;
    @IsString()
    shippingAddress: string;
}