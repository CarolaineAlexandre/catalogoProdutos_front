import { useState } from "react"
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


export default function ProductForm() {

  const { data: category } = useCategories()

  const { mutate:mutateProduct } = useMutateProduct()

  const [inputName, setInputName] = useState('')

  const [inputDescription, setInputDescription] = useState('')

  const [inputColor, setInputColor] = useState('')

  const [inputDate, setInputDate] = useState('')

  const [inputPrice, setInputPrice] = useState(0)

  const [checkboxPromotion, setCheckboxPromotion] = useState(false)

  const [selectCategory, setSelectCategory] = useState(0)


  function cadastrarProduto() {
    
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
            photo1: "https://pifatec.s3.us-east-2.amazonaws.com/image1.png",
            photo2: "https://pifatec.s3.us-east-2.amazonaws.com/image2.png",
            photo3: "https://pifatec.s3.us-east-2.amazonaws.com/image3.png",
            photo4: "https://pifatec.s3.us-east-2.amazonaws.com/image4.png"
          }

          mutateProduct(novoProduto, {
            onSuccess: response => {
              const produtoId = response.id
              alert('Produto cadastrado com sucesso no codigo ' + produtoId)

            },
            onError: error => {
              alert("Falha ao cadastrar o produto, por favor tente novamente!")
              console.log(novoProduto)
              console.log(error)
            }
          })

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
            <input type="file" accept="image/png, image/jpeg, image/gif"/>
            </div>
            <div style={{ margin: '0.5rem 0' }}>
            <input type="file" accept="image/png, image/jpeg, image/gif"/>
            </div>
            <div style={{ margin: '0.5rem 0' }}>
            <input type="file" accept="image/png, image/jpeg, image/gif"/>
            </div>
            <div style={{ margin: '0.5rem 0' }}>
            <input type="file" accept="image/png, image/jpeg, image/gif"/>
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
    </Box>
  );
};


