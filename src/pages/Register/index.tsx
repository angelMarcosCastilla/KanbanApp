import PasswordInput from '@/components/PasswordInput';
import { registerData, registerForm } from '@/interfaces/auth';
import { registerUser } from '@/services/auth';
import { ShemeRegister } from '@/validationScheme/auth';
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
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<registerForm>({
    resolver: yupResolver(ShemeRegister),
    mode: 'onBlur',
  });

  const handleRegister = async (data: registerForm) => {
    try {
      setLoading(true);
      const { userEmail, password, name } = data;
      const res = await registerUser({ userEmail, password, name });
      if (res.error) {
        setError('userEmail', {
          type: 'manual',
          message: 'user with this email already exists',
        });
      } else {
        navigate('/');
      }
      setLoading(false);
    } catch {}
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="Gray.200"
    >
      <Card padding={6} width={{ base: '100%', md: '600px' }} variant="outline">
        <Text fontSize="4xl" mb={5} textAlign="center">
          Register
        </Text>
        <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl mb={4} isInvalid={Boolean(errors.name)}>
            <FormLabel>Nombre usuario: </FormLabel>
            <Input
              size="lg"
              placeholder="Ingrese su nombre de usuario"
              {...register('name')}
            />
            <FormErrorMessage>
              {errors?.name != null && errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={4} isInvalid={Boolean(errors.userEmail)}>
            <FormLabel> Email: </FormLabel>
            <Input
              size="lg"
              placeholder="example@algo.com"
              {...register('userEmail')}
            />
            <FormErrorMessage>
              {errors?.userEmail != null && errors.userEmail?.message}
            </FormErrorMessage>
          </FormControl>
          <Stack direction={{ base: 'column', md: 'row' }} mb={3}>
            <FormControl mb={4} isInvalid={Boolean(errors.password)}>
              <FormLabel> password: </FormLabel>
              <PasswordInput
                size="lg"
                placeholder="***"
                {...register('password')}
              />
              <FormErrorMessage>
                {errors?.password != null && errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={4} isInvalid={Boolean(errors.confirmPassword)}>
              <FormLabel> confirmPassword: </FormLabel>
              <PasswordInput
                size="lg"
                placeholder="***"
                {...register('confirmPassword')}
              />
              <FormErrorMessage>
                {errors?.confirmPassword != null &&
                  errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
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
      </Card>
    </Stack>
  );
}
