import { SetOrderShippingAdressDto } from "../dto/set-order-shipping-adress.dto";
import { Order } from "../entity/order.entity";

export class SetOrderShippingMethodService {
    constructor(private orderRepository) {}

    async update (SetOrderShippingAdressDto: SetOrderShippingAdressDto): Promise<Order> {
        const order = await this.orderRepository.findById(SetOrderShippingAdressDto.orderId);
        
        if (!order) {
            throw new Error('Order not found');
        }

        order.setShippingMethod(SetOrderShippingAdressDto.shippingAddress);

       return  await this.orderRepository.save(order);
 
    }
}