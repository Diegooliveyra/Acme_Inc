'use client';

import { useContext, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { User } from '@/types/user';
import * as S from './styles';
import { LoginContext } from '@/contexts/login';

const LoginTemplate = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [loginData, setLoginData] = useState<User>({} as User);
  const [fieldValues, setFieldValues] = useState<User>({} as User);
  const [storage, setStorage] = useLocalStorage('user', '');

  const { login, setLogin } = useContext(LoginContext);

  function saoObjetosIguais(objeto1: any, objeto2: any): boolean {
    const sortedKeys1 = Object.keys(objeto1).sort();
    const sortedKeys2 = Object.keys(objeto2).sort();

    if (sortedKeys1.length !== sortedKeys2.length) {
      return false;
    }

    return sortedKeys1.every((key, index) => {
      return key === sortedKeys2[index] && objeto1[key] === objeto2[key];
    });
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setStorage(JSON.stringify(fieldValues));

    setShowLogin(true);
    setFieldValues({} as User);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!storage.length) {
      return alert('Cadastro nao encontrado');
    }
    const { name, phone, ...rest } = JSON.parse(storage);

    setLogin({
      isLogged: true,
      user: JSON.parse(storage),
    });

    if (saoObjetosIguais(loginData, rest)) {
      router.push('/');
    } else {
      return alert('Cadastro nao encontrado2');
    }
  };

  return (
    <S.Container>
      {showLogin && (
        <S.Form onSubmit={handleSignIn}>
          <S.Title>Insira os dados de Login</S.Title>
          <Input
            required
            label="E-mail"
            defaultValue={loginData?.email}
            value={loginData?.email}
            handleOnChange={(value: string) =>
              setLoginData({ ...loginData, email: value })
            }
            type="email"
          />
          <Input
            required
            defaultValue={loginData?.email}
            label="Senha"
            type="password"
            value={loginData?.password}
            handleOnChange={(value: string) =>
              setLoginData({ ...loginData, password: value })
            }
          />
          <p>
            Ainda não tem cadastro?{' '}
            <a onClick={() => setShowLogin(false)}>Cadastre-se aqui!</a>
          </p>

          <Button
            type="submit"
            disabled={!(loginData?.email && loginData?.password)}
          >
            Entrar
          </Button>
        </S.Form>
      )}

      {!showLogin && (
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

          <Button
            disabled={
              !(
                fieldValues?.email &&
                fieldValues?.password &&
                fieldValues?.phone &&
                fieldValues?.name
              )
            }
            type="submit"
          >
            Cadastrar
          </Button>
        </S.Form>
      )}
    </S.Container>
  );
};

export default LoginTemplate;
