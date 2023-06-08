import { Form, InputGroup, Button } from "react-bootstrap";
import CardClima from "./CardClima";
import { useState, useEffect } from "react";

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [objetoClima, setObjetoClima] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ubicacion.trim() !== "") {
      consultarAPI();
    } else {
      alert("Debes ingresar una ubicacion valida");
    }
    setUbicacion("");
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuestaGeo = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${
          ubicacion || "Tucuman"
        }&appid=40994877b2bc43b989faa17627b3a695`
      );
      const datosGeo = await respuestaGeo.json();
      const latitud = datosGeo[0].lat;
      const longitud = datosGeo[0].lon;
      const respuestaClima = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=40994877b2bc43b989faa17627b3a695&units=metric&lang=es`
      );
      const datosClima = await respuestaClima.json();
      setObjetoClima(datosClima);
    } catch (error) {
      console.log(error);
    }
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
      {/* <CardClima
        ciudad={objetoClima.name}
        temperatura={objetoClima.main.temp_max}
        descripcion={objetoClima.weather[0].description}
        viento={objetoClima.wind.speed}
        humedad={objetoClima.main.humidity}
        icono={objetoClima.weather[0].icon}
      /> */}
      <CardClima />
    </>
  );
};

export default FormularioClima;
