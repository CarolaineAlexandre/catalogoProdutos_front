import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

export const useCategory = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => api.get('/category').then((res)=>res.data)
    })
}