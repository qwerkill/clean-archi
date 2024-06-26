export class UpdateOrderService {
    constructor(
        private readonly orderRepository
      ) {}
        async updateOrder(id, updateOrderDto) {
            const order = await this.orderRepository.findOneBy({id});
            const orderUpdate = {... order, ...updateOrderDto};
            await  this.orderRepository.save(order);
            return orderUpdate;
        }
}