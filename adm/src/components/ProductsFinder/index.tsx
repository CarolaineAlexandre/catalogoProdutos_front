import { Button } from "@chakra-ui/react";
import { Link} from "react-router-dom";

interface Props {
  products: Product[];
  categoryFilter?: number;
  searchTerm?: string;
  remover: (id: number) => void
}

export default function ProductsFinder({
  products,
  categoryFilter,
  searchTerm,
  remover
}: Props) {
  // Aqui, você pode adicionar lógica para filtrar os produtos com base nos filtros fornecidos
  const filteredProducts = products.filter((product) => {
    // Lógica para aplicar os filtros
    if (categoryFilter && product.category.id !== Number(categoryFilter)) {
      return false;
    }

    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li
          key={product.id}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          {product.id} - {product.name} - Categoria: {product.category.name} - R${" "}
          {product.price.toFixed(2)} -{" "}
          {product.promotion ? "Em Promoção" : "Valor Normal"}
          <div>
            <Link to={'/editarprodutos/'+product.id}>
            <Button 
              bg={"#7a5656"}
              color={"white"}
              _hover={{
                bg: "#c5904A",
              }}
              style={{ marginRight: "0.5rem" }}
            >
              Editar
            </Button>
            </Link>
            <Button colorScheme="red" onClick={() => remover(product.id)}>Excluir</Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
