import React, { useState, useCallback, useEffect } from "react";
import { GoMarkGithub } from "react-icons/go";
import { gitHubLogin } from "../api/login";

import * as S from "./styledComponents";

type LoginFormProps = {
  login: (token: string) => void;
};

const LoginForm = ({ login }: LoginFormProps) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );
  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  );

  const handleSubmitForm = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      gitHubLogin(name, password)
        .then(login)
        .catch(alert);
    },
    [name, password, login]
  );

  return (
    <S.FormWrapper>
      <GoMarkGithub size={50} />
      <S.Form onSubmit={handleSubmitForm}>
        <S.Wrapper column mv={10}>
          <S.Text>Username</S.Text>
          <S.Input type="text" onChange={handleChangeName} value={name} />
        </S.Wrapper>
        <S.Wrapper column mv={10}>
          <S.Text>Password</S.Text>
          <S.Input
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
        </S.Wrapper>
        <S.Wrapper mv={10}>
          <S.Button>Sign in</S.Button>
        </S.Wrapper>
      </S.Form>
    </S.FormWrapper>
  );
};

export default LoginForm;
