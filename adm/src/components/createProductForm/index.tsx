import { ChangeEvent, useState } from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Grid,
  GridItem,
} from "@chakra-ui/react"

import Category_dropdown from "../Category_dropdown"
import { useCategories } from "../../hooks/queries/category"
import { useMutateProduct } from "../../hooks/mutations/products"
import { api } from "../../helpers/axios"


export default function ProductForm() {

  const { data: category } = useCategories()

  const { mutate: mutateProduct } = useMutateProduct()

  const [inputName, setInputName] = useState('')

  const [inputDescription, setInputDescription] = useState('')

  const [inputColor, setInputColor] = useState('')

  const [inputDate, setInputDate] = useState('')

  const [inputPrice, setInputPrice] = useState(0)

  const [checkboxPromotion, setCheckboxPromotion] = useState(false)

  const [selectCategory, setSelectCategory] = useState(0)

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
      alert('Nenhuma foto fornecida para upload.');
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
      alert('Imagem enviada com sucesso:');
      setUrlAws(response.data.urlPhotoAws);
    })
    .catch((_error) => {
      alert('Erro ao enviar a imagem:');
    });
  };

  // Chame a função para iniciar o processo de upload

  function cadastrarProduto() {

    if (inputName && inputDescription && inputColor && inputDate != '') {

      if (selectCategory > 0) {
        if (inputPrice > 0) {
          if (url1 && url2 && url3 && url4 != '') {
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

            console.log(novoProduto)
            mutateProduct(novoProduto, {
              onSuccess: response => {
                const produtoId = response.id
                alert('Produto cadastrado com sucesso no codigo ' + produtoId)
                selectCategory
                setInputName('')
                setInputDescription('')
                setSelectCategory(0)
                setInputPrice(0)
                setInputColor('')
                setCheckboxPromotion(false)
                setInputDate('')
                setPhoto1(null)
                setPhoto2(null)
                setPhoto3(null)
                setPhoto4(null)
                setUrl1('')
                setUrl2('')
                setUrl3('')
                setUrl4('')
              },
              onError: error => {
                console.log(error)
                alert("Falha ao cadastrar o produto, por favor tente novamente!")
              }
            })
          }
          else {
            alert("É necessário salvar fotos para o produto!")
          }
        }

        else {
          alert("Por favor informe um preço válido!")
        }
      }
      else {
        alert("Por favor selecione uma categoria para o produto!")
      }


    }

    else {
      alert("Por favor preencha todos os campos")
    }
  }

  return (
    <Box pl="1rem" pr="1rem" pt="2rem" pb="1rem" margin="1rem">
      <FormControl>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={2}>
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
              <Button onClick={() => handleUpload(photo3, setUrl3)}  mt={4}
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
                  cadastrarProduto();
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
    </Box >
  )
}




