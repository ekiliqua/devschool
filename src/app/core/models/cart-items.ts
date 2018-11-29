import { Item } from '.';

export interface CartItem extends Item {
    quantity: number;
}
