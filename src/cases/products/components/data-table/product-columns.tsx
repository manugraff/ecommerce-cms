import type { ColumnDef } from "@tanstack/react-table";
import type { ProductDTO } from "../../dtos/product.dto";

export const ProductColumns: ColumnDef<ProductDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },

    {
        accessorKey: 'name',
        header: 'Nome do Product'
    }
];