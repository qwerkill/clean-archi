export class RemoveOrderService {
    constructor(
        private readonly orderRepository
      ) {}
      deleteOrder(id) {
        return this.orderRepository.remove(id);
      }
}