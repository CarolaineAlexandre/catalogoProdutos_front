import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useCategoriesById } from "../../hooks/queries/category";
import { api } from "../../helpers/axios";

export default function EditCategoryPage() {
  const { id } = useParams();
  const { data: category } = useCategoriesById(Number(id));

  const [Id, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const [photo, setPhoto] = useState<File | null>(null);
  const [url1, setUrl1] = useState("");

  useEffect(() => {
    if (category) {
      setCategoryId(category.id);
      setCategoryName(category.name);
      setCategoryDescription(category.description);
    }
  }, [category]);

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();

    if (photo) {
      const formData = new FormData();
      formData.append("file", photo);

      try {
        const response = await api.post("/photo/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        alert("Imagem enviada com sucesso");
        setUrl1(response.data.urlPhotoAws);
      } catch (error) {
        alert("Erro ao enviar a imagem");
      }
    } else {
      alert("Selecione uma imagem antes de enviar.");
    }
  };


  const updateCategory = () => {
    if (categoryName !== "" && categoryDescription !== "") {
      const update = {
        name: categoryName,
        description: categoryDescription,
        photo: url1 || null, // Se url1 estiver vazio, passa null
      };
      api
        .put(`/category/${id}`, update)
        .then(() => {
          alert("Cadastro atualizado no código " + id);
        })
        .catch(() => {
          alert("Ocorreu um erro ao atualizar a categoria!");
        });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Box pl="1rem" pr="1rem" pt="2rem" pb="1rem" >
      <form onSubmit={(e) => handleUpload(e)}>
        <FormControl>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={2}>  
            <Text fontSize="xl" mb={5}>
              Atualizando cadastro da categoria no código {Id}
            </Text>          

              <FormLabel>Nome da Categoria</FormLabel>
              <Input
                type="text"
                onChange={(evento) => setCategoryName(evento.target.value)}
                value={categoryName}
              />

              <FormLabel>Descrição</FormLabel>
              <Input
                type="text"
                onChange={(evento) =>
                  setCategoryDescription(evento.target.value)
                }
                value={categoryDescription}
              />

              <FormLabel>Foto da categoria</FormLabel>
              <div style={{ margin: "0.5rem 0" }}>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    if (event.target.files) {
                      setPhoto(event.target.files[0]);
                    }
                  }}
                />
                <Button
                  type="submit"
                  mt={4}
                  bg={"#7a5656"}
                  size="md"
                  color={"white"}
                  _hover={{
                    bg: "#c5904A",
                  }}
                >
                  Confirmar foto
                </Button>
              </div>
            </GridItem>

            <GridItem colSpan={3}>
              <Box textAlign="center">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    updateCategory();
                  }}
                  mt={4}
                  bg={"#7a5656"}
                  size="md"
                  color={"white"}
                  _hover={{
                    bg: "#c5904A",
                  }}
                >
                  Salvar
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
}
