interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: {
      id: number,
      name: string,
      description: string,
      photo: string,
      created_at: Date,
      updated_at: Date,
    },
    color: string;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    promotion: boolean;
    expiration_date: Date;
  }

  interface Category{
    id: number;
    name: string;
    description: string;
    photo: string;
  }
  