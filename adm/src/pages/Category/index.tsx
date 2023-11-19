// src/App.tsx
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import CategoryForm from '../../components/CategoryForm/index';
import LayoutProps from '../../components/Layout';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '2',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LayoutProps>

      <Box textAlign="center" p={4}>
        <CategoryForm  />
      </Box>
            </LayoutProps>
    </ChakraProvider>
  );
}

export default App;
