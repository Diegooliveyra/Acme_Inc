'use client';

import Input from '@/components/Input';
import * as S from './styles';
import Button from '@/components/Button';
import { FormEventHandler, useState } from 'react';
import { User } from '@/types/user';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';

const LoginTemplate = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [fieldValues, setFieldValues] = useState<User>({} as User);
  const [storage, setStorage] = useLocalStorage('user', '');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setStorage(JSON.stringify(fieldValues));
    setShowLogin(true);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!storage.length) {
      return alert('Cadastro nao encontrado');
    }
    const isSameStorage = JSON.stringify(fieldValues) === storage;
    if (isSameStorage) {
      router.push('/');
    }
    setStorage(JSON.stringify(fieldValues));
  };

  return (
    <S.Container>
      {showLogin ? (
        <S.Form onSubmit={handleSignIn}>
          <S.Title>Insira os dados de Login</S.Title>
          <Input
            required
            label="E-mail"
            value={fieldValues?.email}
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, email: value })
            }
            type="email"
          />
          <Input
            required
            label="Senha"
            type="password"
            value={fieldValues?.password}
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, password: value })
            }
          />
          <p>
            Ainda não tem cadastro?{' '}
            <a onClick={() => setShowLogin(false)}>Cadastre-se aqui!</a>
          </p>

          <Button
            type="submit"
            disabled={!(fieldValues?.email && fieldValues?.password)}
          >
            Entrar
          </Button>
        </S.Form>
      ) : (
        <S.Form onSubmit={handleSignUp}>
          <S.Title>Complete os dados para criar sua conta</S.Title>
          <Input
            required
            label="Nome"
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, name: value })
            }
          />
          <Input
            required
            label="E-mail"
            type="email"
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, email: value })
            }
          />
          <Input
            required
            label="Telefone"
            type="tel"
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, phone: value })
            }
          />
          <Input
            required
            label="Senha"
            type="password"
            handleOnChange={(value: string) =>
              setFieldValues({ ...fieldValues, password: value })
            }
          />
          <p>
            já tem cadastro?{' '}
            <a onClick={() => setShowLogin(true)}>Clique aqui!</a>
          </p>

          <Button type="submit">Cadastrar</Button>
        </S.Form>
      )}
    </S.Container>
  );
};

export default LoginTemplate;
