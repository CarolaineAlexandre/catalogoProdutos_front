import { useMutation} from '@tanstack/react-query'
import {api} from  '../../../helpers/axios'

interface ILogin {
    email: string,
    password: string
}

const postAuth = async (data: ILogin) => {
    const response = await api.post('/auth', data)
    return response.data;  
}

export const useMutateLogin= () => useMutation({
  mutationFn: (data: ILogin) => postAuth(data)
})