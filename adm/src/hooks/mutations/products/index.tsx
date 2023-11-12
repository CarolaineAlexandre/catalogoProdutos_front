import { useMutation } from "@tanstack/react-query";
import { api } from "../../../helpers/axios"


interface ProductRequest {
    name: string;
    description: string;
    price: number;
    color: string;
    promotion: boolean;
    expiration_date: Date;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
}

const postProduct = async (data: ProductRequest) => {
      const response = await api.post('/product', data)
      return response.data;
    
}

export const useMutateProduct= () => useMutation({
    mutationFn: (data: ProductRequest) => postProduct(data)
})