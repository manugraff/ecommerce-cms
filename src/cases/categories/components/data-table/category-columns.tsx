import type { ColumnDef } from "@tanstack/react-table";
import type { CategoryDTO } from "../../dto/category.dto";

export const categoryColumns: ColumnDef<CategoryDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Nome da Categoria'
    }
];