import { DataTable } from "@/components/ui/data-table";
import { BrandColumns } from "./brand-columns";
import { useBrands } from "../../hooks/use-brand";

export function BrandDataTable(){

    const {data: brands, isLoading} = useBrands();

    return(
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={BrandColumns} data={brands!}/>    
            )}        
        </div>
    )
}