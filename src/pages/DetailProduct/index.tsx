import React from 'react';
import { useParams } from 'react-router-dom'; // Para obter parâmetros da URL
import ProductDetail from '../Product';

interface RouteParams {
  productId: number;
}

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}

interface ProductDetailPageProps {
  products: Product[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products }) => {
  const { productId } = useParams<RouteParams>(); // Obtém o parâmetro da URL para o ID do produto
  const product = products.find((p) => p.id === parseInt(productId, 10)); // Corrigindo a base para 10

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
