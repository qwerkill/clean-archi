import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepositoryInterface } from '../order/domain/port/order.repository.interface';
import { CreateOrderService } from './domain/use-case/create-order.service';
import { UpdateOrderService } from './domain/use-case/update-order.service';
import OrderRepository from './infrastructure/order.repository';
import { Order } from './domain/entity/order.entity';
import { OrderItem } from './domain/entity/order-item.entity';
import { SetOrderShippingMethodService } from './domain/use-case/set-order-shipping-method.service';
import { PaidOrderService } from './domain/use-case/paid-order.service';
import { RemoveOrderService } from './domain/use-case/remove-order.service';
import { GetAllOrderService } from './domain/use-case/get-all-order.service';
import OrderController from './presentation/order.controller';
import { GetOrdersByCustomerService } from './domain/use-case/get-order-by-customer.service';
@Module({
  imports: [TypeOrmModule.forFeature([
    Order,
    OrderItem,
  ])],
  controllers: [OrderController],
  providers: [
    {
      provide: 'OrderRepositoryInterface',
      useClass: OrderRepository,
    },
    {
      provide: CreateOrderService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new CreateOrderService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide: UpdateOrderService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new UpdateOrderService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide: SetOrderShippingMethodService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new SetOrderShippingMethodService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide: PaidOrderService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new PaidOrderService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide: RemoveOrderService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new RemoveOrderService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide: GetAllOrderService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new GetAllOrderService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    },
    {
      provide : GetOrdersByCustomerService,
      useFactory: (orderRepository: OrderRepositoryInterface) => {
        return new GetOrdersByCustomerService(orderRepository);
      },
      inject: ['OrderRepositoryInterface'],
    }
  ],
})
export class OrderModule {}