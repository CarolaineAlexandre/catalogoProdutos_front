import { useMutation } from "@tanstack/react-query"
import { api } from "../../../helpers/axios"

interface ICategory {
    name: string
    description: string
    photo:string
}

const postCategory = async (data:ICategory) => {
    const response = await api.post('/category', data)
    console.log(response.data)
}

export const useCreateCategory = () => useMutation({
    mutationFn: (data: ICategory) => postCategory(data)
})