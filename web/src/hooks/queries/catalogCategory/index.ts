import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useProductByCategory = (id: number) => {
    return useQuery({
        queryKey: ['category'],
        // queryFn: () => api.get('/product/category/').then((res)=>res.data)
        queryFn: () => api.get(`/product/category/${id}`).then((res)=>res.data)
    })
}

