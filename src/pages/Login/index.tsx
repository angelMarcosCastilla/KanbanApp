import {
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemeLogin } from '@/validationScheme/auth';
import { loginForm } from '@/interfaces/auth';
import { login } from '@/services/auth';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({ resolver: yupResolver(schemeLogin) });

  const handleLogin = (data: loginForm) => {
    login(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="Gray.200"
    >
      <Card padding={6} width={{ base: '100%', md: '500px' }} variant="outline">
        <Text fontSize="4xl" mb={5} textAlign="center">
          Iniciar sesion
        </Text>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl mb={4} isInvalid={Boolean(errors.email)}>
            <FormLabel>Email </FormLabel>
            <Input
              size="lg"
              type="email"
              placeholder="Ingrese su email"
              {...register('email')}
            />
            <FormErrorMessage>
              {' '}
              {errors?.email != null && errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={4} isInvalid={Boolean(errors.email)}>
            <FormLabel>Email </FormLabel>
            <Input
              size="lg"
              type="password"
              placeholder="Ingrese su password"
              {...register('password')}
            />
            <FormErrorMessage>
              {errors?.password != null && errors.password?.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            boxShadow="0 0  20px theme.red.500"
            my={3}
            size={'lg'}
            leftIcon={<span>spanicon</span>}
            colorScheme="blue"
            width="100%"
            loadingText="ingresando..."
          >
            Button
          </Button>
        </form>
      </Card>
    </Stack>
  );
}
