// import {useMutation/*, useQueryClient*/} from '@tanstack/react-query'
// import {api} from '../../../helpers/axios'

// interface ITarefaRequest {
//     title: string
//     completed: boolean
// }

// const postTarefa = async (data: ITarefaRequest) => {
//     await api.post('/task', data)
// }

// export const useMutateTarefa = () => useMutation({
//     mutationFn: (data: ITarefaRequest) => postTarefa(data),
// })

// const deleteTarefa = async(idTarefa: number)=> {
//     await api.delete(`/task/${idTarefa}`)
// }

// export const useMutateDeleteTarefa = () => useMutation({
//     mutationFn: (idTarefa: number) => deleteTarefa(idTarefa),
// })