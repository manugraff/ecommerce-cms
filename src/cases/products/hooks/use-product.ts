import { useMutation, useQuery } from "@tanstack/react-query";
import type { ProductDTO } from "../dtos/product.dto";
import { ProductService } from "../services/product.service";

export function useProducts(){
    return useQuery<ProductDTO[]>({
        queryKey: ['products'],
        queryFn: ProductService.list
    });
}

export function useProduct(id: string){
    return useQuery<ProductDTO>({
        queryKey: ['product'],
        queryFn: ()=> ProductService.getByID(id),
        enabled: !!id //or Boolean(id)
    });
}

export function useCreateProduct(){
    return useMutation<ProductDTO, Error, Omit<ProductDTO, 'id'>>({
        mutationFn: (product: Omit<ProductDTO, 'id'>) => ProductService.create(product)
    })
}

export function useUpdateProduct(){
    return useMutation<ProductDTO, Error, {id: string, product: ProductDTO}>({
        mutationFn: ({id, product}) => ProductService.update(id, product)
    })
}

export function useDeleteeProduct(){
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => ProductService.delete(id)
    })
}