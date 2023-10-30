
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetail, { Product } from '../ProductDetail';

//  API
const API_URL = 'https://api-catalogo-pi.onrender.com';

// obtém e exibe os detalhes do produto
const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // faz uma solicitação GET para obter os detalhes do produto
    axios
      .get(`${API_URL}/product/${product}`) // Substitui 'productId' pelo ID do produto desejado
      .then((response) => {
        // atualiza o estado com os dados do produto recebidos da API
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter detalhes do produto:', error);
      });
  }, []); 

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
