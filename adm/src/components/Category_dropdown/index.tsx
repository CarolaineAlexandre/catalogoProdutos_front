import { Select } from "@chakra-ui/react";

interface Props{
  category: Category[];
  selectCategory: number,
  setSelectCategory: (newValue: number) => void,
}



export default function Category_dropdown({ category,selectCategory,setSelectCategory}: Props) {
  


  return(
        
    <Select placeholder="Selecione a categoria"  onChange={(evento) => setSelectCategory(parseInt(evento.target.value))}
    value={selectCategory}>
    {category.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.name}
      </option>
    ))}
  </Select>
)
}

