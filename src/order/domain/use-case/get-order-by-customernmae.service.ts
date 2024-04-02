import { OrderRepositoryInterface } from "../port/order.repository.interface";

export class GetOrderByCostumerNameService {
    constructor(
        private readonly orderRepository : OrderRepositoryInterface
      ) {}
      getOrderByCostumerName(costuermerName) {
        const orders = this.orderRepository.findByCustomerName(costuermerName);

        return orders;
      }
}