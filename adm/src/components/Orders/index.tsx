// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Text,
//   Spinner,
//   VStack,
// } from '@chakra-ui/react';
// import OrderProgress from '../../components/OrderProgress'; // Ajuste o caminho se necessário

// interface OrderItem {
//   price: number;
//   quantity: number;
// }

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const history = useHistory();

//   const steps = [
//     { label: 'Recebido', status: 'pending' },
//     { label: 'Em Preparação', status: 'preparation' },
//     { label: 'Em rota de entrega', status: 'delivering' },
//     { label: 'Entregue', status: 'delivered' },
//   ];

//   const nextStep = ( step:string, id:number ) => {
//     let next_step =  ''
//     if(step == 'pending'){
//       next_step = 'preparation'
//     }else if(step == 'preparation'){
//       next_step = 'delivering'      
//     }else if(step == 'delivering'){
//       next_step = 'delivered'      
//     }

//     const updateOrder = async () => {
//       const status = {
//         status : next_step
//       }

//       try {
//         const response = await fetch(`http://localhost:3000/order/${id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(status),
//         });
//         // const response = await fetch('https://api-catalogo-pi-1.onrender.com/order');
//         const data = await response.json();
//         // setOrders(data);
//         console.log('data => ',data)
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     updateOrder()
//   }

//   function payment(method: string){
//     if(method === 'credit_card'){
//       return 'Cartão de Crédito'
//     }else if(method === 'debit_card'){
//       return 'Cartão de Débito'
//     }else if(method === 'debit_card'){
//       return 'Cartão de Débito'
//     }
//   }
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/order');
//         // const response = await fetch('https://api-catalogo-pi-1.onrender.com/order');
//         const data = await response.json();
//         setOrders(data);
//         console.log('data => ',data)
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, [nextStep]);

//   const calculateTotal = (orderItems: OrderItem[]): number => {
//     return orderItems.reduce((accum: number, item: OrderItem) => {
//       return accum + (item.price * item.quantity);
//     }, 0);
//   };

//   const renderOrder = (order: any) => {
//     const total = calculateTotal(order.orderItems);
//     const currentStepIndex = steps.findIndex(step => step.status === order.status);

//     let status = order.status === 'delivered' ? true : false
 
//     return (
//       <VStack
//         marginBottom={4}
//         spacing={4}
//         p={4}
//         borderWidth={1}
//         borderRadius="md"
//         borderColor="gray.200"
//         key={order.order_number}
//         width="80%"
//         backgroundColor={'gray.100'}
//       >
//         <Text fontSize="lg" fontWeight="bold">Pedido: {order.order_number}</Text>
//         <Text>Total: R$ {total.toFixed(2)}</Text>
//         <Text>Pagamento: {order.method_payment}</Text>
//         <Text fontSize={'lg'} fontWeight={"bold"}>Status</Text>
//         <OrderProgress steps={steps} currentStepIndex={currentStepIndex} />
//         <Button
//           isDisabled={ status }
//           // disabled={ order.status == 'delivered' ? true : false}
//           mt={2}
//           colorScheme={status != true ? 'red' : 'teal' }
//           onClick={() => {nextStep(order.status, order.id)}}
//         >
//           { status != true ? 'Finalizar Etapa' : 'Pedido Concluido' }
//         </Button>
//       </VStack>
//     );
//   };

//   return (
//     <Box p={4}>
//       <Flex direction="column" align="center" mb={4}>
//         <Heading as="h1" mb={4} color={'#7A5656'}>Lista de Pedidos</Heading>

//         {loading ? (
//           <Spinner size="lg" />
//         ) : orders.length ? (
//           orders.map(renderOrder)
//         ) : (
//           <Text color="gray.500" fontSize="xl">Você não possui pedidos ainda.</Text>
//         )}

//         <Button
//           mt={4}
//           colorScheme="teal"
//           // onClick={() => history.push('/home')}
//         >
//           Voltar
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Orders;



import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import OrderProgress from '../../components/OrderProgress'; // Ajuste o caminho se necessário

interface OrderItem {
  price: number;
  quantity: number;
}

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const steps = [
    { label: 'Recebido', status: 'pending' },
    { label: 'Em Preparação', status: 'preparation' },
    { label: 'Em rota de entrega', status: 'delivering' },
    { label: 'Entregue', status: 'delivered' },
  ];

  const nextStep = async (step: string, id: number) => {
    let next_step = '';
    if (step === 'pending') {
      next_step = 'preparation';
    } else if (step === 'preparation') {
      next_step = 'delivering';
    } else if (step === 'delivering') {
      next_step = 'delivered';
    }

    const status = { status: next_step };

    try {
      const response = await fetch(`http://localhost:3000/order/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      });
      const data = await response.json();
      // Atualiza a lista de pedidos com a nova informação
      // @ts-ignore
      setOrders(prevOrders => 
        prevOrders.map(order => 
          // @ts-ignore
          order.id === id ? { ...order, status: next_step } : order
        )
      );
      console.log('data => ', data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/order');
        const data = await response.json();
        setOrders(data);
        console.log('data => ', data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []); // Apenas na montagem do componente

  const calculateTotal = (orderItems: OrderItem[]): number => {
    return orderItems.reduce((accum: number, item: OrderItem) => {
      return accum + (item.price * item.quantity);
    }, 0);
  };

    function payment(method: string){
    if(method === 'credit_card'){
      return 'Cartão de Crédito'
    }else if(method === 'debit_card'){
      return 'Cartão de Débito'
    }else if(method === 'pix'){
      return 'PIX'
    }else if(method === 'bank_transf'){
      return 'Transferência Bancária'
    }else if(method === 'boleto'){
      return 'Boleto'
    }}

  const renderOrder = (order: any) => {
    const total = calculateTotal(order.orderItems);
    const currentStepIndex = steps.findIndex(step => step.status === order.status);
    const isDelivered = order.status === 'delivered';

    return (
      <VStack
        marginBottom={4}
        spacing={4}
        p={4}
        borderWidth={1}
        borderRadius="md"
        borderColor="gray.200"
        key={order.order_number}
        width="80%"
        backgroundColor={'gray.100'}
      >
        <Text fontSize="lg" fontWeight="bold">Pedido: {order.order_number}</Text>
        <Text>Total: R$ {total.toFixed(2)}</Text>
        <Text>Pagamento: {payment(order.method_payment)}</Text>
        <Text fontSize={'lg'} fontWeight={"bold"}>Status</Text>
        <OrderProgress steps={steps} currentStepIndex={currentStepIndex} />
        <Button
          isDisabled={isDelivered}
          mt={2}
          colorScheme={isDelivered ? 'teal' : 'red'}
          onClick={() => nextStep(order.status, order.id)}
        >
          {isDelivered ? 'Pedido Concluído' : 'Finalizar Etapa'}
        </Button>
      </VStack>
    );
  };

  return (
    <Box p={4}>
      <Flex direction="column" align="center" mb={4}>
        <Heading as="h1" mb={4} color={'#7A5656'}>Lista de Pedidos</Heading>

        {loading ? (
          <Spinner size="lg" />
        ) : orders.length ? (
          orders.map(renderOrder)
        ) : (
          <Text color="gray.500" fontSize="xl">Você não possui pedidos ainda.</Text>
        )}

        <Button
          mt={4}
          colorScheme="teal"
        >
          Voltar
        </Button>
      </Flex>
    </Box>
  );
};

export default Orders;
