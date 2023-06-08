import { Form, InputGroup, Button } from "react-bootstrap";
import CardClima from "./CardClima";

const FormularioClima = () => {
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-geo-alt-fill"></i>
          </InputGroup.Text>
          <Form.Control placeholder="Ubicación" aria-label="Ubicación" />
          <Button variant="primary" type="submit">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Form>
      <CardClima />
    </>
  );
};

export default FormularioClima;
