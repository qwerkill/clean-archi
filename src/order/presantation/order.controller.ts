import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { CreateOrderService } from "../domain/use-case/create-order.service";
import { createOrderDto } from "../domain/dto/create-order.dto";
import { Order } from "../domain/entity/order.entity";
import { UpdateOrderService } from "../domain/use-case/update-order.service";
import { SetOrderShippingMethodService } from "../domain/use-case/set-order-shipping-method.service";
import { SetOrderShippingAdressDto } from "../domain/dto/set-order-shipping-adress.dto";
import { PaidOrderService } from "../domain/use-case/paid-order.service";
import { RemoveOrderService } from "../domain/use-case/remove-order.service";
import { GetAllOrderService } from "../domain/use-case/get-all-order.service";
import { GetOrdersByCustomerService } from "../domain/use-case/get-order-by-customer.service";


@Controller('orders')
export default class OrderController {
    constructor(
        private readonly createOrderService: CreateOrderService,
        private readonly updateOrderService: UpdateOrderService,
        private readonly setOrderShippingMethodService : SetOrderShippingMethodService,
        private readonly paidOrderService : PaidOrderService,
        private readonly removeOrderService: RemoveOrderService,
        private readonly getALLOrderService: GetAllOrderService,
        private readonly getOrdersByCustomerService : GetOrdersByCustomerService,
    ) {}

    @Get()
    async getAllOrder():Promise<Order[]> {
        return this.getALLOrderService.getAll();
    }

    @Get('/:customerName')
    async getOrderByCustomerName(@Body() customerName: string):Promise<Order[]> {
        return this.getOrdersByCustomerService.getOrdersByCustomer(customerName);
    }

    @Post()
    async createOrder(@Body() createOrderDto: createOrderDto):Promise<Order> {
        return this.createOrderService.createOrder(createOrderDto);
    }

    @Post('/update')
    async updateOrder(@Body() id: string, updateOrderDto: createOrderDto):Promise<Order> {
        return this.updateOrderService.updateOrder(id, updateOrderDto);
    }

    @Post('/shipping')
    async setShippingMethod(@Body() SetOrderShippingAdressDto: SetOrderShippingAdressDto):Promise<Order> {
        return this.setOrderShippingMethodService.setShippingMethod(SetOrderShippingAdressDto);
    }

    @Post('/paid')
    async paidOrder(@Body() orderId: string):Promise<Order> {
        return this.paidOrderService.paidOrder(orderId);
    }

    @Delete()
    async removeOrder(@Body() id: string):Promise<void> {
        return this.removeOrderService.deleteOrder(id);
    }
}