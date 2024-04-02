import { createOrderDto } from "../dto/create-order.dto"
import { OrderItem } from "../entity/order-item.entity";
import { Order } from "../entity/order.entity"
import { OrderRepositoryInterface } from "../port/order.repository.interface";

export class CreateOrderService {
    constructor(
        private readonly orderRepository : OrderRepositoryInterface
      ) {}
      async createOrder(createOrderDto: createOrderDto): Promise<Order> {        
        
          const orderItems = createOrderDto.orderItems.map(orderItemDto => {
            return new OrderItem(
              orderItemDto.productName,
              orderItemDto.quantity,
              orderItemDto.price
            );
          });

          const order = new Order(createOrderDto.customerName, orderItems);

          return await this.orderRepository.createOrder(order);
      }

}