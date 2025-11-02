import { DataTable } from "@/components/ui/data-table";
import { ProductColumns } from "./product-columns";
import { useProducts } from "../../hooks/use-product";

export function ProductDataTable(){

    const {data: products, isLoading} = useProducts();

    return(
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={ProductColumns} data={products!}/>    
            )}        
        </div>
    )
}