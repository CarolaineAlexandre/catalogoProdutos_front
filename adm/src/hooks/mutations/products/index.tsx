import { useMutation } from "@tanstack/react-query";
import { api } from "../../../helpers/axios"


interface ProductRequest {
    name: string;
    description: string;
    price: number;
    color: string;
    promotion: boolean;
    expiration_date: Date;
}

const postProduct = async (data: ProductRequest) => {
    await api.post('/product',data)
}

export const useMutateProduct= () => useMutation({
    mutationFn: (data: ProductRequest) => postProduct(data)
})