import { OrderStatus } from "../entity/order.entity";
import { OrderRepositoryInterface } from "../port/order.repository.interface";

export class PaidOrderService {
constructor(
private readonly orderRepository : OrderRepositoryInterface
) {}
async update(orderId: string): Promise<void> {
    const order = await this.orderRepository.findById(orderId);
    if (order.status !== 'SHIPPING_ADDRESS_SET') {
    throw new Error('Shipping address is not set');
    }
    order.status = OrderStatus.PAID;
    order.paidAt = new Date();
    await this.orderRepository.save(order);
    }
}