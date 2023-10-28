import { useQuery} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

// export const useTarefas = () => {
//     return useQuery({
//         queryKey: ['tarefas'],
//         queryFn: () => api.get('/task').then((res)=>res.data)
//     })
// }