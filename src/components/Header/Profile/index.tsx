import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Martins</Text>
          <Text color="gray.300" fontSize="small">
            martinsgabriel1956@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Martins"
        src="https://github.com/martinsgabriel1956.png"
      />
    </Flex>
  );
}
