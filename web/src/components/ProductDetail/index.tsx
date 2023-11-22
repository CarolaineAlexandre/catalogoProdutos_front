import React from 'react';

export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageSrc} alt={product.name} />
      <p>Preço: ${product.price}</p>
      <p>Descrição: {product.description}</p>
      <button>Salvar</button>
    </div>
  );
};
export default ProductDetail;