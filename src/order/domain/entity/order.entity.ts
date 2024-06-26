import { OrderItem } from "../../../order/domain/entity/order-item.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../enum/order-status.enum";
@Entity('order')
export class Order {

    constructor(customerName: string, oderItems: OrderItem[]) {
        this.customerName = customerName;
        this.orderItems = oderItems;
        this.status = OrderStatus.CART;
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
     customerName : string;

    @Column()
       price : number;

    @Column()
      created_at: Date;

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[];

    @Column({ nullable: true })
    shippingAddress: string | null;
  
    @Column({ nullable: true })
    shippingAddressSetAt: Date | null;

    @Column({ nullable: false })
    status: OrderStatus ;

    @Column({ nullable: true })
    paidAt: Date | null;

    getOrderTotalPrice (): number {
        return this.orderItems.reduce(
            (total, orderItem) => total + orderItem.getTotalPrice(),
            0
        );
    }



    setShippingMethod (shippingAddress: string): void {

        if(shippingAddress === '') {
            throw new Error('Shipping address is required');
        }
        if (shippingAddress.length > 100) {
            throw new Error('Shipping address is too long');
        }

        this.status = OrderStatus.SHIPPING_ADDRESS_SET;
        this.shippingAddress = shippingAddress;
        this.shippingAddressSetAt = new Date();
    }

    pay (): void {
        if (this.status !== OrderStatus.SHIPPING_ADDRESS_SET) {
            throw new Error('Shipping address is not set');
        }
        this.status = OrderStatus.PAID;
        this.paidAt = new Date();
    }
}

