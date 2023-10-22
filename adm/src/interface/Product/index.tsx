interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    color: string;
    price: number;
    isPromotional: boolean;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    validity: Date;
    photos: string[];
  }
  
  interface ProductFormProps {
    onSubmit: (product: Product) => void;
    user: string;
  }
  