import "./css/App.css";
import Formulario from "./Formulario";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Formulario />
      </LocalizationProvider>
    </div>
  );
}

export default App;
