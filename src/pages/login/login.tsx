import {
  ContainerLeft,
  ContainerRight,
  RememberRow,
  StyledButton,
  StyledForm,
  StyledInput,
  Wrapper,
} from './styleLogin';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <Wrapper>
        
      <ContainerLeft>
        <img
          src="src/assets/images/Logo HelpDesk Pro em azul e ciano.png"
          alt="Logo site"
        />
        <h1>
          Suporte organizado.
          <br />
          Soluções <span className="cor-destaque">mais rápidas.</span>
        </h1>
      </ContainerLeft>

      <ContainerRight>
        <h1>Bem-vindo de volta!</h1>
        <h2>Acesse sua conta para continuar.</h2>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="Senha" />

          <RememberRow>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
            Lembrar de mim
            </label>
            <a href="#forgot-password">Esqueceu sua senha?</a>
          </RememberRow>

          <StyledButton type="submit">Entrar</StyledButton>
        </StyledForm>
      </ContainerRight>
    </Wrapper>
  );
}

export default Login;
