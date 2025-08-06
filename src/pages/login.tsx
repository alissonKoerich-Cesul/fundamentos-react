import {
  Button,
  Link as ChakraLink,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import loginImage from "../../public/assets/login-image.gif";

const signInFormSchema = z.object({
  email: z.email("Digite um e-mail válido").nonempty("O e-mail é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">
        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify="center">
        <Stack>
          <Heading as="h1" color={"#000000"} fontSize="3xl" fontWeight="bold ">
            Login
          </Heading>
          <Text color="gray.500" fontSize="lg" fontWeight={"normal"}>
            Se você já é membro, pode fazer login com seu endereço de e-mail e
            senha.
          </Text>

          <VStack align="flex-start" gap={6} mt={10}>
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500">Email</Field.Label>
              <Input
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color={"black"}
                {...register("email")}
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.email}>
              <Field.Label color="gray.500">Senha</Field.Label>
              <PasswordInput
                type="password"
                h={16}
                colorPalette="blue"
                borderRadius="md"
                color={"black"}
                {...register("password")}
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Checkbox
              colorPalette="blue"
              color="gray.500"
              fontSize={"md"}
              fontWeight={"medium"}
            >
              Lembre-me
            </Checkbox>

            <Button
              w="full"
              h={16}
              colorPalette="blue"
              borderRadius="md"
              fontWeight="medium"
              fontSize="md"
            >
              Entrar
            </Button>
          </VStack>

          <HStack gap={1} justify={"center"} mt={10}>
            <Text color="gray.500" fontWeight="medium" fontSize="md">
              Não possui uma conta?
            </Text>

            <ChakraLink color="blue" asChild>
              <NextLink href="/sign-up">Clique aqui!</NextLink>
            </ChakraLink>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
