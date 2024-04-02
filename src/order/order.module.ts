import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './domain/entity/order.entity';
import { GetAllOrderService } from './domain/use-case/get-all-order.service';
import { GetOrderByCostumerNameService } from './domain/use-case/get-order-by-customernmae.service';
import { RemoveOrderService } from './domain/use-case/remove-order.service';
import { SetOrderShippingMethodService } from './domain/use-case/set-order-shipping-method.service';
import { CreateOrderService } from './domain/use-case/create-order.service';
import { UpdateOrderService } from './domain/use-case/update-order.service';
import { PaidOrderService } from './domain/use-case/paid-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
    controllers: [],
  providers: [GetAllOrderService, GetOrderByCostumerNameService, RemoveOrderService, SetOrderShippingMethodService, CreateOrderService,UpdateOrderService, PaidOrderService],
})
export class OrderModule {}
