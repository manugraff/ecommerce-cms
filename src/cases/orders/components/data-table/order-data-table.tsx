import { DataTable } from "@/components/ui/data-table";
import { useOrders } from "../../hooks/use-order";
import { orderColumns } from "./order-columns";

export function OrderDataTable() {

    const {data: orders, isLoading} = useOrders();

    return (
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={orderColumns} data={orders!} />
            )}
        </div>

    )
}