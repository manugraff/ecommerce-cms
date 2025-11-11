import type { ProductDTO } from "@/cases/products/dtos/product.dto";

export interface OrderItem {
    id?: string;
    product: ProductDTO;
    quantity: number;
    value: number;
}
export interface Order{
    id?: string;
    custumer: any;
    status: string;
    total: number;
    items: OrderItem[];
    createdAd: Date;
    updateAd: Date;
}