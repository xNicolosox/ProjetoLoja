import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import ProductImg from "../../public/imgs/produto.jpg";
import categoriaService from "../../service/categoria.service";
import produtoService from "../../service/produto.service";

export default function CadastrarProduto() {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    categoriaService.getCategorias().then((r) => setCategoryList(r));
  }, []);

  async function handleCadastro(e) {
    e.preventDefault();
    const produto= await produtoService.createProduto({
      name,
      image,
      price,
      category,
    });
    if (produto.id) {
      alert("produto criado com sucesso");
      router.push("/produtos");
    } else {
      alert("falha ao criar produto")
    }
    console.log(name, image, price, category);
  }

  return (
    <Container className="p-2">
      <Card className="p-2">
        <Form onSubmit = {handleCadastro}>
        <h2>Cadastrar Produto</h2>
        <Form.Group>
          <Form.Label> Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o nome do produto"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="p-2">
          <Form.Label> Imagem</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o endereço da imagem"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="p-2">
          <Form.Label> Preço</Form.Label>
          <Form.Control
            type="number"
            placeholder="Insira o preço do produto"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="p-2">
          <Form.Label> Categoria </Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option> Escolha uma Categoria </option>
            {categoryList.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="p-3 text-center">
          <Button type="submit"> Cadastrar </Button>
        </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
