import React from 'react';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';

interface Step {
  label: string;
  status: string;
}

interface OrderProgressProps {
  steps: Step[];
  currentStepIndex: number;
}

const OrderProgress: React.FC<OrderProgressProps> = ({ steps, currentStepIndex }) => {
  return (
    <Flex direction="column" width="100%">
      <Flex direction="row" align="center" justify="space-between">
        {steps.map((step, index) => (
          <Flex key={index} align="center" direction="row">
            <Tooltip label={step.label} aria-label={step.label}>
              <Box
                width="24px"
                height="24px"
                borderRadius="full"
                backgroundColor={index <= currentStepIndex ? 'teal.500' : 'gray.300'}
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={2}
              >
                <Text fontSize="sm" fontWeight="bold">{index + 1}</Text>
              </Box>
            </Tooltip>
            <Text
              fontSize="sm"
              color={index <= currentStepIndex ? 'teal.500' : 'gray.500'}
              ml={2}
            >
              {step.label}
            </Text>
            {index < steps.length - 1 && (
              <Box
                width="20px"
                height="2px"
                // backgroundColor={index < currentStepIndex ? 'teal.500' : 'gray.300'}
                flex="1"
              />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default OrderProgress;
