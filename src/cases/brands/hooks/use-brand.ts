import { useMutation, useQuery } from "@tanstack/react-query";
import { BrandService } from "../services/brand.service";
import type { BrandDTO } from "../dtos/brand.dto";

export function useBrands(){
    return useQuery<BrandDTO[]>({
        queryKey: ['brands'],
        queryFn: BrandService.list
    });
}

export function useBrand(id: string){
    return useQuery<BrandDTO>({
        queryKey: ['brand'],
        queryFn: ()=> BrandService.getByID(id),
        enabled: !!id //or Boolean(id)
    });
}

export function useCreateBrand(){
    return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({
        mutationFn: (brand: Omit<BrandDTO, 'id'>) => BrandService.create(brand)
    })
}

export function useUpdateBrand(){
    return useMutation<BrandDTO, Error, {id: string, brand: BrandDTO}>({
        mutationFn: ({id, brand}) => BrandService.update(id, brand)
    })
}

export function useDeleteeBrand(){
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => BrandService.delete(id)
    })
}