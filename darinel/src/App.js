import "./App.css";
import Otro from "./Otro";
import Formulariocss from "./Formulariocss";
import FormularioBoot from "./FormularioBoot";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <h1>Columnas a la izquierda</h1>
        </div>
        <div className="col-4">
          <h1>Centro</h1>
        </div>
        <div className="col-4">
          <h1>Derecha</h1>

        </div>
        <div className="App">
          <h1>HOLA</h1>
          <Otro />
          <Formulariocss />
          <div className="container-fluid" />
          <FormularioBoot />
        </div>
      </div>
    </>
  );
}

export default App;
