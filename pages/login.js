import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import authService from "../service/auth.service";
import { useAuthContext } from "../context/auth.context";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useAuthContext ();

  if (isAuthenticated) {
    router.push("/categorias");
  }

 async function handleLogin(e) {
    e.preventDefault();
    //logica de login para o sistema.
    //1. verificar os dados integrados
    //2.enviar requesição para o backend
    //3. esperar resposta
    //3.1 se existir erro, alertar o usario
    // 3.2 se a requisição estiver ok, salva o token e volta para a pagina.
    try{
      await authService.login({
        email,
        password,
      });
      setIsAuthenticated(true);
      router.push("/categorias");
    }
     catch(erro){
      console.log(erro)
      alert("Falha ao autenticar, por favor tente novamente mano")
    }
  } 

  return (
    <>
      <Container className="p-5">
        <Card>
          <Form onSubmit={handleLogin}>
            <h1 className="text-center pt-3">
            Entre na sua loja
            </h1>
            <Form.Group className="m-4">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira seu E-mail"
                required
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="m-4">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira sua senha"
                required
                value = {password}
                onChange={(e)=>setPassword(e.target.value)}
                minLength={8}
              />
            </Form.Group>
            <Form.Group className="p-2 text-center">
              <Button type="submit" style= {{backgroundColor: "#079be1"}}> Entrar no Sistema </Button>
              <br />
              <Link href="/nova-conta">
                <a> Crie uma conta</a>
              </Link>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}
