import { IsArray, IsNotEmpty, IsString, IsInt } from 'class-validator';

class CreateOrderItemsDto {
  @IsNotEmpty()
  @IsString()
  productName: string;
  @IsNotEmpty()
  @IsInt()
  quantity: number;
  @IsNotEmpty()
  @IsInt()
  price: number;
}

export class createOrderDto {
  @IsNotEmpty()
  @IsString()
  customerName: string;
  @IsNotEmpty()
  @IsArray()
orderItems: CreateOrderItemsDto[];
}
