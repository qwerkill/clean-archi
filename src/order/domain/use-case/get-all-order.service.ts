import { OrderRepositoryInterface } from "../port/order.repository.interface";

export class GetAllOrderService {
    constructor(
        private readonly orderRepository : OrderRepositoryInterface
      ) {}
      async getAll() {
        const orders = await this.orderRepository.findAll();

        return orders;
      }
} 