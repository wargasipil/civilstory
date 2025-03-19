import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Image,
  Text,
  Button,
  LinkProps,
  Separator
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack
        gap={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Link href="https://templateskart.com">
            <Image w="100px" src="https://images.websiteplanet.com/wp-content/uploads/2020/07/9-Best-T-Logos-and-How-to-Make-Your-Own-for-Free-image3.png" alt="TemplatesKart" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Build fully functional accessible web applications faster than ever
          </Text>
        </Box>
        <HStack
          gap={4}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack gap={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack gap={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
          <VStack gap={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack gap={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Chat on Discord</CustomLink>
              <CustomLink>Follow on Twitter</CustomLink>
              <CustomLink>Follow on Github</CustomLink>
              <CustomLink>Github discussions</CustomLink>
            </VStack>
          </VStack>
          <VStack gap={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack gap={2} alignItems="flex-start" color="gray.500">
              <CustomLink>TemplatesKart</CustomLink>
              <CustomLink>Documentation</CustomLink>
              <CustomLink>Github organization</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Separator my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} gap={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link
            href="https://github.com/username"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
          >
            Heri Santoso
          </Link>
        </Text>
        <Stack gap={2} direction={{ base: 'column', md: 'row' }}>
          <Button rounded="md" colorScheme="gray">
            <FaGithub />
            Github Discussions
          </Button>
          <Button
            as={Link}
            rounded="md"
            variant="outline"
          >
            <BsDiscord />
            Discord community
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;