import { Form, InputGroup, Button } from "react-bootstrap";
import CardClima from "./CardClima";
import { useState } from "react";

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ubicacion.trim() !== "") {
      console.log(ubicacion);
    } else {
      alert("Debes ingresar una ubicacion valida");
    }

    setUbicacion("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-geo-alt-fill"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Ubicación"
            aria-label="Ubicación"
            value={ubicacion}
            pattern="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"
            onChange={(e) => {
              setUbicacion(e.target.value);
            }}
            minLength="3"
            maxLength="25"
            required
          />
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
