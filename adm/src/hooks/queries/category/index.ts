import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => api.get('/category').then((res)=>res.data)
    })
}

export const useCategoriesById = (id:number) => {
    return useQuery({
        queryKey: ['categoriesById', id],
        queryFn: () => api.get(`/category/${id}`).then((res)=>res.data)
    })
}
