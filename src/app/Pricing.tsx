import React from 'react'
import {Box, Flex, Text,Heading, Button,HStack, Icon} from '@chakra-ui/react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Pricing() {
  return (
    <Box m='auto' maxW='950px' mt='-150px' mx={{base:"20px", lg:"auto"}} borderRadius={'16px'} overflow='hidden' 
    boxShadow={' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'}>
        <Flex direction={{base:"column", md:"column", lg:"row"}}>
        <Box bg='#F7FAFC' p='40px' textAlign='center'>
            <Text fontWeight='bold' fontSize='24px'>Premium PRO</Text>
            <Heading fontSize='60px'>$329</Heading>
            <Text>billed just once</Text>
            <Button bg='#6B46C1' color='white' w='300px' mt='20px'>Get Started</Button>
        </Box>
        <Box pt='50px' pl='50px' bg={'white'} pr='10px'>
            <Text mb='10px'>Access these features when you get this pricing package for your business.</Text>
            <HStack mb={'15px'}>
                <Icon as={checkMarkIcon} />
                <Text>International calling and messaging API</Text>
            </HStack>
            <HStack mb={'15px'}>
                <Icon as={checkMarkIcon} />
                <Text>Additional phone numbers</Text>
            </HStack>
            <HStack mb={'15px'}>
                <Icon as={checkMarkIcon} />
                <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack mb={'15px'}>
                <Icon as={checkMarkIcon} />
                <Text>24/7 support and consulting</Text>
            </HStack>
        </Box>
        </Flex>
    </Box>
  )
}