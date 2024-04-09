import { createOrderDto } from '../../../order/domain/dto/create-order.dto';
import { OrderItem } from '../../../order/domain/entity/order-item.entity';
import { Order } from '../../../order/domain/entity/order.entity';
import { OrderRepositoryInterface } from '../../../order/domain/port/order.repository.interface';

export class CreateOrderService {
  constructor(private readonly orderRepository: OrderRepositoryInterface) {}

  async createOrder(createOrderDto: createOrderDto): Promise<Order> {
    const orderItems = createOrderDto.orderItems.map(
      (orderItem) =>
        new OrderItem(
          orderItem.productName,
          orderItem.quantity,
          orderItem.price,
        ),
    );

    const order = new Order(createOrderDto.customerName, orderItems);

    return await this.orderRepository.save(order);
  }
}