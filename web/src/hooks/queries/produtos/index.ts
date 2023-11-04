import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

// export const useProductByCategory = (id:number) => {
export const useProductByCategory = () => {
    return useQuery({
        queryKey: ['productsByCategory'],
        queryFn: () => api.get(`/product/category/1`).then((res)=>res.data)
        // queryFn: () => api.get(`/product/category/${id}`).then((res)=>res.data)
    })
}