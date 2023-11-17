import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useProduct = (productId:number) => {
//export const useProduct = () => {
    return useQuery({
        queryKey: ['productsByCategory'],
        //queryFn: () => api.get(`/product/category/1`).then((res)=>res.data)
        queryFn: () => api.get(`/product/${productId}`).then((res)=>res.data)
    })
}