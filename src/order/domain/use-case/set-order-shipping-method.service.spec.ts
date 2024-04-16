import { Order } from '../entity/order.entity';
import { OrderRepositoryInterface } from '../port/order.repository.interface';
import { SetOrderShippingMethodService } from './set-order-shipping-method.service';

describe('set order shipping address', () => {
  const order = new Order('John Doe', []);

  const orderRepositoryMock = {
    findById() {
      return order;
    },
    save(order: Order) {
      return order;
    },
  } as unknown as OrderRepositoryInterface;

  it('should update an order with a shipping method', async () => {
    const setOrderShippingAddressService = new SetOrderShippingMethodService(
      orderRepositoryMock,
    );

    const updatedOrder =
      await setOrderShippingAddressService.setOrderShippingAddress({
        orderId: '123',
        shippingAddress: '123 Main St.',
      });

    expect(updatedOrder.shippingAddress).toBe('123 Main St.');
  });

  it('should throw an error when the shipping address is empty', async () => {
    const setOrderShippingAddressService = new SetOrderShippingMethodService(
      orderRepositoryMock,);

      try{
        await setOrderShippingAddressService.setOrderShippingAddress({
          orderId: '12341234',
          shippingAddress:'',
        }) 
      } catch(error) {
        expect(error.message).toEqual('Shipping address is required')
      }

  });
});