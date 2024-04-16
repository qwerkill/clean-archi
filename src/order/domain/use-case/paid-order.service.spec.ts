import { Order } from "../entity/order.entity";
import { OrderStatus } from "../enum/order-status.enum";
import { OrderRepositoryInterface } from "../port/order.repository.interface";
import { PaidOrderService } from "./paid-order.service";


describe('Paid Order', () => {
    const order = new Order('John Doe', []);
    order.setShippingMethod('123 Main St');
    
    const orderRepositoryMock = {
        findById() {
        return order;
        },
        save(order: Order) {
        return order;
        },
    } as unknown as OrderRepositoryInterface;
    
    
    it('should Paid Order', async () => {
        const paidOrderService = new PaidOrderService(
        orderRepositoryMock,
        );
        
        const paidOder = await paidOrderService.paidOrder('1');
    
        expect(paidOder.status).toBe('PAID');
    });
});