import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";
import FormularioClima from "./components/FormularioClima";

function App() {
  return (
    <Container>
      <h1 className="text-center">Clima</h1>
      <FormularioClima />
    </Container>
  );
}

export default App;
