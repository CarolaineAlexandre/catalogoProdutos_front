import { ChangeEvent, useEffect, useState } from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react"

import Category_dropdown from "../Category_dropdown"
import { useCategories } from "../../hooks/queries/category"
// import { useMutateProduct } from "../../hooks/mutations/products"
import { useProductsById } from "../../hooks/queries/products"
import { useParams } from "react-router-dom"
import { api } from "../../helpers/axios"
// import LayoutProps from "../Layout"





export default function EditProductForm() {

  const { id } = useParams()
  // console.log("Teste" + id)
  // console.log(typeof (id))
  const toast = useToast()


  const { data: product } = useProductsById(Number(id));
  const { data: category } = useCategories();
  // const { mutate: mutateProduct } = useMutateProduct();

  const [Id, setId] = useState(0);
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [checkboxPromotion, setCheckboxPromotion] = useState(false);
  const [selectCategory, setSelectCategory] = useState(0);

  useEffect(() => {
    // Atualiza o estado quando os dados do produto estão disponíveis
    if (product) {
      setId(product.id)
      setInputName(product.name);
      setInputDescription(product.description);
      setInputColor(product.color);
      setInputDate(new Date(product.expiration_date).toISOString().split('T')[0]);
      setInputPrice(product.price);
      setCheckboxPromotion(product.promotion);
      setSelectCategory(product.category.id)
    }
  }, [product]);




  // console.log(product)

  const [photo1, setPhoto1] = useState<File | null>(null)
  const [photo2, setPhoto2] = useState<File | null>(null)
  const [photo3, setPhoto3] = useState<File | null>(null)
  const [photo4, setPhoto4] = useState<File | null>(null)
  const [url1, setUrl1] = useState("")
  const [url2, setUrl2] = useState("")
  const [url3, setUrl3] = useState("")
  const [url4, setUrl4] = useState("")

  const handleUpload = (photo: File | null, setUrlAws: React.Dispatch<React.SetStateAction<string>>) => {
    if (!photo) {
      // alert('Nenhuma foto fornecida para upload.');
      toast({
        title: 'Imagem',
        description: "É necessario salvar a imagem para o produto ",
        status: 'warning',
        duration: 1500,
        isClosable: true,
        position: 'top'
      })
      return;
    }

    const formData = new FormData();
    formData.append('file', photo);

    api.post('/photo/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        // alert('Imagem enviada com sucesso');
        toast({
          title: 'Imagem',
          description: "Imagem enviada com sucesso",
          status: 'success',
          duration: 1500,
          isClosable: true,
          position: 'top'
        })
        setUrlAws(response.data.urlPhotoAws);
      })
      .catch((error) => {
        console.log(error)
        // alert('Erro ao enviar a imagem');
        toast({
          title: 'Imagem',
          description: "Erro ao enviar a imagem",
          status: 'error',
          duration: 1500,
          isClosable: true,
          position: 'top'
        })
      });
  };

  function atualizarProduto() {

    if (inputName && inputDescription && inputColor && inputDate != '') {

      if (selectCategory > 0) {
        if (inputPrice > 0) {

          const novoProduto = {
            name: inputName,
            description: inputDescription,
            category: selectCategory,
            price: inputPrice,
            color: inputColor,
            promotion: checkboxPromotion,
            expiration_date: new Date(inputDate + 'T00:00:00-03:00'),
            photo1: url1,
            photo2: url2,
            photo3: url3,
            photo4: url4
          }

          api.put(`/product/${id}`, novoProduto ).then(()=>{
            // alert('Cadastro atualizado no codigo '+id)
            toast({
              title: 'Produto',
              description: "Produto atualizado no código " + id,
              status: 'success',
              duration: 1500,
              isClosable: true,
              position: 'top'
            })
          }).catch((erro) => {
            console.log(erro)
            // alert('Ocorreu um erro ao atualizar o produto!')
            toast({
              title: 'Produto',
              description: "Erro ao atualizar produto",
              status: 'error',
              duration: 1500,
              isClosable: true,
              position: 'top'
            })
          })

        }

        else {
          // alert("Por favor informe um preço válido!")
          toast({
            title: 'Preço',
            description: "Insira um preço válido",
            status: 'warning',
            duration: 1500,
            isClosable: true,
            position: 'top'
          })
        }
      }
      else {
        // alert("Por favor selecione uma categoria para o produto!")
        toast({
          title: 'Categoria',
          description: "Insira uma categoria para o produto",
          status: 'warning',
          duration: 1500,
          isClosable: true,
          position: 'top'
        })
      }


    }

    else {
      // alert("Por favor preencha todos os campos")
      toast({
        title: 'Campos',
        description: "Preencha todos os campos",
        status: 'warning',
        duration: 1500,
        isClosable: true,
        position: 'top'
      })
    }
  }

  return (
    <Box pl="1rem" pr="1rem" pt="2rem" pb="1rem" margin="1rem">
      <FormControl>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <FormLabel>Código do Produto</FormLabel>
            <p>{Id}</p>
            <p></p>
            <FormLabel>Nome do Produto</FormLabel>
            <Input type="text"
              onChange={(evento) => setInputName(evento.target.value)}
              value={inputName} />
            <FormLabel>Descrição</FormLabel>
            <Input type="text"
              onChange={(evento) => setInputDescription(evento.target.value)}
              value={inputDescription} />
            <FormLabel>Fotos do Produto</FormLabel>
            <div style={{ margin: '0.5rem 0' }}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setPhoto1(event.target.files[0]);
                  }
                }}
              />
              <Button onClick={() => handleUpload(photo1, setUrl1)}
                mt={4}
                bg={'#7a5656'}
                size="md"
                type="submit"
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}>Salvar Foto 1</Button>
            </div>

            <div style={{ margin: '0.5rem 0' }}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setPhoto2(event.target.files[0]);
                  }
                }}
              />
              <Button onClick={() => handleUpload(photo2, setUrl2)}
                mt={4}
                bg={'#7a5656'}
                size="md"
                type="submit"
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}>Salvar Foto 2</Button>
            </div>

            <div style={{ margin: '0.5rem 0' }}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setPhoto3(event.target.files[0]);
                  }
                }}
              />
              <Button onClick={() => handleUpload(photo3, setUrl3)} mt={4}
                bg={'#7a5656'}
                size="md"
                type="submit"
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}>Salvar Foto 3</Button>
            </div>

            <div style={{ margin: '0.5rem 0' }}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setPhoto4(event.target.files[0]);
                  }
                }}
              />
              <Button onClick={() => handleUpload(photo4, setUrl4)}
                mt={4}
                bg={'#7a5656'}
                size="md"
                type="submit"
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}>Salvar Foto 4</Button>
            </div>

          </GridItem>
          <GridItem colSpan={1}>
            <FormLabel>Categoria</FormLabel>
            {
              category &&
              (<Category_dropdown category={category} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
              )}

            <FormLabel>Cor</FormLabel>
            <Input type="text"
              onChange={(evento) => setInputColor(evento.target.value)}
              value={inputColor} />

            <FormLabel>Data de Validade</FormLabel>
            <Input placeholder="Selecione a data" size="md" type="date"
              onChange={(evento) => setInputDate(evento.target.value)}
              value={inputDate} />

            <FormLabel>Preço</FormLabel>
            <Input type="number"
              onChange={(evento) => setInputPrice(parseFloat(evento.target.value))}
              value={inputPrice} />

            <FormLabel>Em promoção?</FormLabel>
            <Checkbox
              onChange={(evento) => setCheckboxPromotion(evento.target.checked)}
              checked={checkboxPromotion} />
          </GridItem>

          <GridItem colSpan={3}>
            <Box textAlign="center">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  atualizarProduto();
                }}
                mt={4}
                bg={'#7a5656'}
                size="md"
                type="submit"
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}
              >
                Salvar
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </FormControl>
    </Box>

  );
};


