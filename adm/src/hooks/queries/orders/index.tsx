import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useOrders = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: () => api.get('/order').then((res)=>res.data)
    })
}

// export const useProductsById = (id:number) => {
//     return useQuery({
//         queryKey: ['productsById', id],
//         queryFn: () => api.get(`/product/categoryproduct/${id}`).then((res)=>res.data)
//     })
// }