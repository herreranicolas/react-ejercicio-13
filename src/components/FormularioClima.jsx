import { Form, InputGroup, Button, Spinner } from "react-bootstrap";
import CardClima from "./CardClima";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [objetoClima, setObjetoClima] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      const pedido = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          ubicacion || "Tucuman"
        }&appid=40994877b2bc43b989faa17627b3a695&units=metric&lang=es`
      );
      const respuesta = await pedido.json();
      setObjetoClima(respuesta);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ubicacion.trim() !== "") {
      consultarAPI();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes ingresar una ubicación válida",
        iconColor: "#3b71ca",
        confirmButtonColor: "#3b71ca",
      });
    }
    setUbicacion("");
  };

  const componenteRenderizado = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <CardClima objetoClima={objetoClima} />
  );

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
            pattern="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"
            minLength="3"
            maxLength="25"
            value={ubicacion}
            required
            onChange={(e) => {
              setUbicacion(e.target.value);
            }}
          />
          <Button variant="primary" type="submit">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </Form>
      {componenteRenderizado}
    </>
  );
};

export default FormularioClima;
