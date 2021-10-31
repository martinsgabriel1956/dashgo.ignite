import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "../components/Form/Input";
import { SignInFormSchema } from '../schemas/SignInFormSchema';

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });
  const { errors } = formState;

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            error={errors.email}
            type="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            name="password"
            error={errors.password}
            type="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          colorScheme="pink"
          mt="8"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
