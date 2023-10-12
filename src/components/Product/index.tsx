import React from 'react';

interface Product {
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
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
