import {
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemeLogin } from '@/validationScheme/auth';
import { loginForm } from '@/interfaces/auth';
import { login } from '@/services/auth';
import { useState } from 'react';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';
import PasswordInput from '@/components/PasswordInput';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginForm>({ resolver: yupResolver(schemeLogin) });

  const handleLogin = async (data: loginForm) => {
    try {
      setLoading(true);
      const res = await login(data);
      if (!res?.isLogged) {
        setError(res.field, {
          type: 'required',
          message: res.message,
        });
      } else {
        navigate('/');
      }
      setLoading(false);
    } catch {
      console.log('error');
    }
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
              {errors?.email != null && errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={4} isInvalid={Boolean(errors.password)}>
            <FormLabel>Password </FormLabel>
            <PasswordInput
              size="lg"
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
            colorScheme="blue"
            width="100%"
            isLoading={loading}
            loadingText="ingresando..."
          >
            Button
          </Button>
        </form>
        <Text textAlign="center" color="gray.500">
          Don`&apos;t have a account?{' '}
          <Link color="blue.600" as={LinkRoute} to="/register">
            Sign up
          </Link>
        </Text>
      </Card>
    </Stack>
  );
}
