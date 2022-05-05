import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  return (
    <Box bg={'gray.800'} minHeight={'100vh'}>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'red.400'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '20%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                Use Cloud Icons,
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                with Figma!
              </Text>
            </Heading>
            <Text color={'gray.300'} fontSize={{ base: '2xl' }} textAlign={'justify'}>
              Cloud Icons is a Figma plugin which allows to easily create cloud native diagrams with Figma or FigJam. Use it to enhance your architecture by importing cloud provider specific services as icons.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.content}>
                  <CheckIcon h={4} w={4} color={'red.400'} />
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <a href="https://www.figma.com/community/plugin/1094628499782224426/Cloud-Icons" target={'_blank'} rel="noreferrer">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  color={'gray.300'}
                  colorScheme={'red'}
                  bg={'red.400'}
                  leftIcon={<ExternalLinkIcon h={4} w={4} color={'gray.300'} />}
                  _hover={{ bg: 'red.500' }}>
                  Try it
                </Button>
              </a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'600px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'400px'}
              overflow={'hidden'}>
              <Image
                alt='Cloud Icons Figma Demo'
                src={'/frame.gif'}
                layout={'fill'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home

const stats = [
  { content: 'Figma is free!' },
  { content: 'You can share it via a link' },
  { content: 'You can use one of the best design tools for your architecture' },
  { content: 'Join a huge community and simply use templates and plugins' }
];

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};