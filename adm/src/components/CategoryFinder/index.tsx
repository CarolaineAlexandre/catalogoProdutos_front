import { Button } from "@chakra-ui/react";
import { Link} from "react-router-dom";

interface Props {
  categories: Category[];
  searchTerm?: string;
  remover: (id: number) => void
}

export default function CategoriesFinder({
  categories,
  searchTerm,
  remover
}: Props) {
  
  const filteredCategories = categories.filter((category) => {
    if (
      searchTerm &&
      !category.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <ul>
      {filteredCategories.map((category) => (
        <li
          key={category.id}
          style={{
            color: 'black',
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img 
              src={category.photo} 
              alt={`Imagem da categoria ${category.name}`} 
              style={{ width: "80px", height: "80px", marginRight: "0.5rem" }}
            />
            {category.id}: {category.name} - Descrição: {category.description}
          </div>
          <div>
            <Link to={'/editarcategorias/'+category.id}>
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
            <Button colorScheme="red" onClick={() => remover(category.id)}>Excluir</Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
