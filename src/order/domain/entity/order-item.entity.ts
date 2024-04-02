import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity('order_item')
export class OrderItem {
    constructor(productName: string,quantity: number, price: number) {
        if(productName === '') throw new Error('Product name must be provided')
        if(quantity < 0) throw new Error('Quantity must be greater than 0')
        if(quantity > 2 ) throw new Error('Quantity must be less than 2')
        
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    @PrimaryColumn()
    id:number;

    @Column()
    productName : string;

    @Column()
    quantity : number;

    @Column({
        type: 'int'
    })
    price : number;

    @ManyToOne(() => Order, order => order.orderItems)
    order: Order;

    getTotalPrice (): number {
        return this.price * this.quantity;
    }
}
