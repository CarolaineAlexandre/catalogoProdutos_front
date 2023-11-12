import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => api.get('/product').then((res)=>res.data)
    })
}

export const useProductsById = (id:number) => {
    return useQuery({
        queryKey: ['productsById', id],
        queryFn: () => api.get(`/product/${id}`).then((res)=>res.data)
    })
}